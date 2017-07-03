import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
const Info = () => (
<div>
  <Card>
    <CardHeader title="PWA Point 1." subtitle="신뢰성" avatar="images/heri.jpg"/>
    <CardMedia overlay={<CardTitle title="Reliable" subtitle="important" />}>
      <img src="/images/pwa-reliable.png" alt="" />
    </CardMedia>
    <CardTitle title="항상 연결 되도록~" subtitle="공롱 X, Li-Fi X" />
  </Card>   
  <Card>
    <CardHeader title="PWA Point 2." subtitle="고성능"avatar="images/heri.jpg"/>
    <CardMedia overlay={<CardTitle title="Fast" subtitle="important" />}>
      <img src="/images/pwa-fast.png" alt="" />
    </CardMedia>
    <CardTitle title="빠르게~" subtitle="서비스워커 캐싱~" />
  </Card>   
  <Card>
    <CardHeader title="PWA Point 3." subtitle="인게이징" avatar="images/heri.jpg"/>
    <CardMedia overlay={<CardTitle title="Engaging" subtitle="important" />}>
      <img src="/images/pwa-engaging.png" alt="" />
    </CardMedia>
    <CardTitle title="사용자 끌어들이기~" subtitle="알바몬으로 오세요~" />
  </Card>         
  </div>
);

export default Info;
