import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res;

  // Matéria 1
  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'alice@example.com', comment: 'first post!', content_id: 1 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'alice@example.com', comment: 'ok, now I am gonna say something more useful', content_id: 1 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'bob@example.com', comment: 'I agree', content_id: 1 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  // Matéria 2
  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'bob@example.com', comment: 'I guess this is a good thing', content_id: 2 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'charlie@example.com', comment: 'Indeed, dear Bob, I believe so as well', content_id: 2 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  res = http.post('http://localhost:8000/api/comment/new', JSON.stringify({ email: 'eve@example.com', comment: 'Nah, you both are wrong', content_id: 2 }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 200': (r) => r.status == 200 });

  // Listagem matéria 1
  res = http.get('http://localhost:8000/api/comment/list/1');
  check(res, { 'status was 200': (r) => r.status == 200 });

  // Listagem matéria 2
  res = http.get('http://localhost:8000/api/comment/list/2');
  check(res, { 'status was 200': (r) => r.status == 200 });
}
