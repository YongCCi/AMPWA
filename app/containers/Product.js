import React, {Component} from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
class Product extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardHeader title="샘플1" subtitle="" avatar="images/heri.jpg"/>
                    <CardMedia>
                        <img src="images/sample_1.jpg" alt="" />
                    </CardMedia>
                </Card>
                <Card>
                    <CardHeader title="샘플2" subtitle="" avatar="images/heri.jpg"/>
                    <CardMedia>
                        <img src="images/sample_2.jpg" alt="" />
                    </CardMedia>
                </Card>
                <Card>
                    <CardHeader title="샘플3" subtitle="" avatar="images/heri.jpg"/>
                    <CardMedia>
                        <img src="images/sample_3.jpg" alt="" />
                    </CardMedia>
                </Card>   
            </div>                     
        );
    }
}

export default Product;