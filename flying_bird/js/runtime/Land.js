// 不断移动的陆地

import { Sprite } from '../base/Sprite'
import { DataStore } from '../base/DataStore'

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land');
        super(image, 0, 0, image.width, image.height, 0, 
            DataStore.getInstance().canvas.height - image.height, image.width, image.height);

        //地板的水平变化坐标
        this.landX = 0;
        //地板的移动速度
        this.moveSpeed = 2;
    }

    draw() {
        this.landX += this.moveSpeed;
        //图片右侧到达右边界 重新开始
        if (this.landX > (this.img.width - DataStore.getInstance().canvas.width)){
            this.landX = 0;
        }
        super.draw(this.img, this.srcX, this.srcY, this.srcW, this.srcH, -this.landX,
            this.y, this.width, this.height);
    }
}