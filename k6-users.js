import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = '<url>'
  const n = 5 // (n * 100) ids

  const groups = Array.from({ length: 100 }, (_, i) => i);
  const ids = Array.from({ length: n }, () => groups).flat().join(",");

  const res = http.post(url, ids);

  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}


