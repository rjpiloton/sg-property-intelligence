import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from ingestion import normalize, UraAdapter

class IngestionTests(unittest.TestCase):
    def setUp(self):
        self.row = dict(id='fixture-1', project_id='demo', date='2025-01-01', price_sgd=1076391.041671, area_sqm=100, source_id='synthetic-v1', retrieved_at='2026-11-01T00:00:00Z', synthetic=True)
    def test_conversion(self):
        self.assertAlmostEqual(normalize(self.row)['price_psf'], 1000)
    def test_missing_provenance(self):
        del self.row['source_id']
        with self.assertRaises(ValueError): normalize(self.row)
    def test_bad_area(self):
        for value in (0, -1, float('nan'), True):
            with self.assertRaises(ValueError): normalize({**self.row, 'area_sqm': value})
    def test_adapter_is_gated(self):
        with self.assertRaises(RuntimeError): UraAdapter(lambda _: []).fetch()
    def test_injected_transport_contract(self):
        calls=[]
        adapter=UraAdapter(lambda endpoint: calls.append(endpoint) or [self.row])
        self.assertEqual(adapter.fetch(approved_endpoint='https://example.test/fixture'), [self.row])
        self.assertEqual(calls, ['https://example.test/fixture'])
