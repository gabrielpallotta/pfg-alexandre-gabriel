import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const url = '<url>'

  // 5
  // 881
  // 10007
  // 100109
  const primeNumber = '10007'

  const res = http.post(url, primeNumber);

  check(res, {
    'is status 200': (r) => r.status === 200,
    'is prime': (r) => r.body == "PRIME",
  });
}