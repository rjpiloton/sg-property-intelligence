"""Credential-free normalization boundary; no guessed remote API endpoint."""
from datetime import date, datetime
from math import isfinite

def normalize(row):
    required = ('id', 'project_id', 'date', 'price_sgd', 'area_sqm', 'source_id', 'retrieved_at', 'synthetic')
    if any(k not in row for k in required):
        raise ValueError('Missing required provenance or transaction field')
    date.fromisoformat(row['date'])
    datetime.fromisoformat(row['retrieved_at'].replace('Z', '+00:00'))
    for key in ('price_sgd', 'area_sqm'):
        if isinstance(row[key], bool) or not isinstance(row[key], (int, float)) or not isfinite(row[key]) or row[key] <= 0:
            raise ValueError('Expected positive finite number')
    if not isinstance(row['synthetic'], bool):
        raise ValueError('Explicit synthetic boolean required')
    if any(not isinstance(row[k], str) or not row[k].strip() for k in ('id', 'project_id', 'source_id')):
        raise ValueError('Empty identifier')
    return {**row, 'price_psf': row['price_sgd'] / (row['area_sqm'] * 10.76391041671)}

class UraAdapter:
    """Contract boundary pending verification of endpoint, access and redistribution rights."""
    def __init__(self, transport):
        self.transport = transport

    def fetch(self, *, approved_endpoint=None):
        if not approved_endpoint:
            raise RuntimeError('Official endpoint and licence verification required before network ingestion')
        return self.transport(approved_endpoint)
