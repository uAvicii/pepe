import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{f as i,g as a,i as n,t as o,J as c}from"./index-48960f67.js";const h={data(){return{canvas:null,context:null,snake:[{x:10,y:10}],food:{x:5,y:5},direction:"right",score:0,gameOver:!1}},mounted(){this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d"),this.startGame()},methods:{startGame(){this.gameOver=!1,this.score=0,this.snake=[{x:10,y:10}],this.direction="right",setInterval(this.moveSnake,100)},moveSnake(){if(this.gameOver)return;const e={...this.snake[0]};switch(this.direction){case"up":e.y-=1;break;case"down":e.y+=1;break;case"left":e.x-=1;break;case"right":e.x+=1;break}e.x===this.food.x&&e.y===this.food.y?(this.food={x:Math.floor(Math.random()*this.canvas.width/10),y:Math.floor(Math.random()*this.canvas.height/10)},this.snake.unshift(e),this.score+=10):(this.snake.pop(),this.snake.unshift(e)),this.checkCollision()&&(this.gameOver=!0),this.drawGame()},checkCollision(){const e=this.snake[0];if(e.x<0||e.y<0||e.x>=this.canvas.width/10||e.y>=this.canvas.height/10)return!0;for(let t=1;t<this.snake.length;t++)if(e.x===this.snake[t].x&&e.y===this.snake[t].y)return!0;return!1},drawGame(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="red",this.context.fillRect(this.food.x*10,this.food.y*10,10,10),this.context.fillStyle="green",this.snake.forEach(e=>{this.context.fillRect(e.x*10,e.y*10,10,10)})},changeDirection(e){if(e.preventDefault(),!this.gameOver)switch(e.key){case"ArrowUp":this.direction!=="down"&&(this.direction="up");break;case"ArrowDown":this.direction!=="up"&&(this.direction="down");break;case"ArrowLeft":this.direction!=="right"&&(this.direction="left");break;case"ArrowRight":this.direction!=="left"&&(this.direction="right");break}}},created(){window.addEventListener("keydown",this.changeDirection)}},d={class:"snake-game"},l={ref:"canvas",class:"canvas"},f={class:"score"},v={key:0,class:"game-over"};function k(e,t,x,_,s,m){return i(),a("div",d,[n("canvas",l,null,512),n("div",f,"Score: "+o(s.score),1),s.gameOver?(i(),a("div",v,"Game Over")):c("",!0)])}const y=r(h,[["render",k],["__scopeId","data-v-917c3180"]]);export{y as default};
