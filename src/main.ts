import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log('🚀服务已启动！~~');
});

app.get('/', (req: Request, res: Response) => {
  res.send('你好 :)');
});

const data = [
  {
    id: 1,
    title: '关山月',
    content: '明月出天山，苍茫云海间',
  },
  {
    id: 2,
    title: '望岳',
    content: '会当凌绝顶，一览众山小',
  },
  {
    id: 3,
    title: '忆江南',
    content: '日出江花红胜火，春来江水绿如蓝',
  },
];

app.get('/posts', (req: Request, res: Response) => {
  res.send(data);
});

app.get('/posts/:postId', (req: Request, res: Response) => {
  const { postId } = req.params;

  const posts = data.filter(item => item.id == parseInt(postId, 10));

  res.send(posts[0]);
});

app.post('/posts', (req: Request, res: Response) => {
  const { content } = req.body;

  res.status(201);

  console.log(req.headers['sing-along']);

  res.set('Sing-Along', 'How I what you are!');

  res.send({
    message: `成功创建了内容: ${content}`,
  });
});
