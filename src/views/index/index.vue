<template>
  <div id="home">
      <div class="top">
          <div class="left">
              <p>{{city}}</p>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div class="right">
              <a href="/search" class="search">
                  <div class="tb">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      <span>{{txt}}</span>
                  </div>
              </a>
          </div>
      </div>

      <div class="main">
      <div class="swiper">
            <div class="pic">
               <img src="http://pic2.34580.cn/group1/M00/AB/51/wKgNY1zQI1WANmaWAAEnKR2M3KA042.gif" alt="">
            </div>
      </div>

      <div class="tip">
            <ul>
                <li v-for="(item,index) in tip" :key="index">
                    <div class="pic">
                       <img :src="item.url" alt="">
                    </div>
                        {{item.wz}}
                </li>
            </ul>
      </div>

      <div class="discount">
        <div class="pic">
            <img src="http://pic2.34580.cn/group1/M00/96/8E/wKgNYlzQfC2ALVv8AAMZ7VHJ9_0410.gif" alt="">
        </div>    
      </div>

      <div class="area">
          <ul>
              <a href="https://wechatx.34580.com/topics/d4c6698e2b17df5bd76209b2fde34893" v-for="(item,index) in area" :key="index">
                  <div class="pic">
                      <img :src="item.URL" alt="">
                  </div>
                  <div class="name">
                      <span>{{item.Name}}</span>
                  </div>
              </a>
          </ul>
      </div>

      <div class="gift">
          <div class="pic">
              <img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" alt="">
          </div>
      </div>

      <div class="ltime">
          <div class="top">
              <div class="left">
                  按时抢购
              </div>
              <div class="right">
                  <div class="pic">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAABGdBTUEAALGPC/xhBQAAA0pJREFUSA2tVM9rU0EQznt5MfFke1Bsoa30P6iiKBgh9CBU/HHx4EEhav0BUntLS2JCk5bSgqBFsGiPonizIt5iDilYClbBmwelBVushxZPsUmTft8289i3TUIsLrw3u998MzuzM7s+H0Ymk+kbGRk5x7nPnVTnNkYF4FellZ/HhCAYfylt/jD27QjzLzSFY1HRCe5aZ7kgmC6ug/Rgrgl8SqfTi+LeGR0d7SiXy0eSyeQxglifhljygbUpLJHEbMuy+gQQScyuVCrvCWCPj6IgZml75Klw9xCWGZUlClpubW0tw38RWAJyES6P0glkIBgMdg0NDS0LXyWMKMMugIl5CNQLZmOxCK8x5K9i0w31OfXkkS+11PU8rxKAeQ9oLrgtiJ7wTA71Et6eDsI1ouepqang+vr6Y8R+gWuc2tvOzs7BaDRa4JrDNWByIPSA/AHt/YxKNEc/sF5Mv6RSqR5iaiDGXzBYk7UpqSOHuIV7cRuensBDQIjAHsBzCEcbFwwGRex8zwF52nGcdlFQAutAaPt1LBQKdRUKhZ+qJvF4fFVXguzmJngsFlvhvGYRgde5oD6fIx5EojmvoDmvtba2HhBMl2qHsbGxNgFBfknywMDAH8EoJyYmVJ4OMr9TKpWWgalTwmntip8GSHiJXM7Z3s3XQVngp1U6C0/PideqtGd76SVwL9IAY7ZuL+3od/65XM6Zm5u7gWqn8LkHonP0OcrGOqbD4fBMJBLhvfIMT1RI5TicvgPjEL4SjGf8fn/abAbdA6uCaiRhdxM4S7sGm/OJRGJBeGoTRp7P5xdA5K34HQgETg4PD38Xksjq0ZzBceT1qyX68fHx7mKxOA8/B+HnMzI7wcwsGm5sbPyAog2KaVyGu2JkSlSaV7IfvBfgXTX1ssaJPIU/tscK+q3b5gNQ3SDbaANx0IykHwSSBbcdCTxit6uukHZqxkmTHPUQIYFL9S7tLj+8m4juOhWQ33YRGgDshll8fLD6IV+bXNThMpy+Qgf5oZvHGZ8177RpU13fooTtGxtG9zFZRVq9LFgNg01gD/lg4B041cwG1cLzrV5paWkZ/KcWrhGAB6rbwjprL5dxcnLyMF60FE6i8WXUN+L8fz8r29PJ6dc7N4MRAAAAAElFTkSuQmCC" alt="">
                  </div>
                  <span>04</span>:
                  <span>20</span>:
                  <span>10</span>
              </div>
          </div>
          <div class="bottom">
              <router-link tag="a" :to="'/listshopcar/'+item.ProductId" v-for="(item,index) in ltime" :key="index">
                  <div class="pic">
                      <img :src="item.PictureId | toPath()" alt="">
                  </div>
                  <div class="name">
                      {{item.ProductName}}
                  </div>
                  <!-- <div class="activity">
                      {{item.activity}}
                  </div> -->
                  <div class="price">
                      {{item.PvStandard}}
                  </div>
              </router-link>
          </div>
      </div>

      <div class="special">
          <div class="pic">
              <span class="z1"><img src="http://pic2.34580.cn/group1/M00/96/83/wKgNYlzQbjiARurEAABtgKG6AZ435.jpeg" alt=""></span>
              <span class="z1"><img src="http://pic2.34580.cn/group1/M00/AB/83/wKgNY1zQ6eSAdUhRAAFQJr7FkUc97.jpeg" alt=""></span>
              <span class="z2"><img src="http://pic2.34580.cn/group1/M00/AC/7C/wKgNY1zTd5-Acj45AAEO1xgm_js69.jpeg" alt=""></span>
              <span class="z2"><img src="http://pic2.34580.cn/group1/M00/AC/7E/wKgNY1zTe4KAFBdRAAC2_zhZvvs90.jpeg" alt=""></span>
              <span class="z2"><img src="http://pic2.34580.cn/group1/M00/97/CB/wKgNYlzT6zyACUUkAACN8p4hz2E77.jpeg" alt=""></span>
              <span class="z3"><img src="http://pic2.34580.cn/group1/M00/AC/6C/wKgNY1zS_z6AcvDRAAD3UnAbAEI17.jpeg" alt=""></span>
          </div>
      </div> 

      <div class="love">
          <h2><span class="pic"><img src="data:image/png;base64,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" alt=""></span> 猜你喜欢</h2>
      </div>

      <div class="list">
          <router-Link tag="a" :to="'/listshopcar/'+item.ProductId" v-for="(item,index) in like" :key="index">
              <div class="pic">
                  <img :src="item.PictureId | toPath() " alt="">
              </div>
              <div class="name">
                    {{item.ProductName}}
              </div>
              <div class="price">
                <div class="jg">
                    {{item.UnitPeriodMoney}}
                </div>
                <div class="shopcar">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
              </div>    
      </router-Link>

      </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      city:"苏州市",
      txt:"送给妈妈的礼物",
      tip:[
          {
            url:"http://pic2.34580.cn/group1/M00/54/14/wKgNYlw9pxGAbFW9AAAHDoo9uw0348.png",
            wz:"0元起送0运费"
          },
          {
            url:"http://pic2.34580.cn/group1/M00/68/C7/wKgNY1w9N8mAGj-4AAADoUsJVko155.png",
            wz:"晚到必赔"
          },
          {
            url:"http://pic2.34580.cn/group1/M00/69/38/wKgNY1w9nFWAaONrAAAHmBntHvg444.png",
            wz:"100%检"
          },
          {
            url:"http://pic2.34580.cn/group1/M00/54/85/wKgNYlw-DF2AKwSaAAAG4pHr6xE740.png",
            wz:"包退包赔"
          }
      ],
      area:[],
      ltime:[],
      like:[]
    }
  },
  created() {

    //限时抢购
    fetch("https://api1.34580.com/sz/Home/FlashSaleRequest?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9").then((res)=>{
      return res.json()
    }).then((res)=>{
      this.ltime= res.Data.FlashSaleProducts
    })

    //猜你喜欢
     fetch("https://api1.34580.com/sz/ProductRequests/ProductMultiConditionRequest?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9&json=%7B%22CategoryIds%22:[101155],%22PageIndex%22:1,%22PageSize%22:20,%22OrderDirectionType%22:0,%22OrderFieldType%22:0,%22sourcetype%22:%229%22%7D").then((res)=>{
      return res.json()
    }).then((res)=>{
      this.like= res.Data.SourceData
      console.log(this.like)
    })

    //discount
     fetch("https://api1.34580.com/sz/Home/ShortcutIconRequest?accesstoken=384eb6e0fd6dff1a&customerguid=5fc281aa-f73a-4fc9-b652-1ac1495bbe18&sourcetype=9").then((res)=>{
      return res.json()
    }).then((res)=>{
      this.area= res.Data.ShortcutIcons.splice(0,10)
    })
  },
};
</script>

<style lang="scss" scoped>
#home{
    width: 100%;
    height: 100%;

    .top{
        width: 100%;
        height: .96rem; 
        display: flex;
        justify-content: space-around;
        align-self: center;
        color: #666;
        background: #fff;
        .left{
            width: 1.14rem;
            height: .96rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: .275rem;
        }
        .right{
            width: 6.2rem;
            height: .96rem;
            padding: .18rem;
            .search{
                background: rgba(51,51,51,.06);
                width: 5.88rem;
                height: .64rem;
                border-radius: 1rem;
                text-align: center;
                color: #999;
                display: flex;
                justify-content: center;
                align-items: center;  
                font-size: .3rem;
            }
        }
    }
  .main{
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
    padding-bottom: 1rem;
    .swiper{
          width: 100%;
          height: 3.21rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          .pic{
              width: 7.11rem;
              height: 2.32rem;
              img{
                  width: 100%;
                  height: 100%;
              }
          }
          
    }

    .tip{
        width: 100%;
        height: .68rem;
        background: #fff;
        display: flex;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
            li{
              height: .36rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .pic{
                  width: .32rem;
                  height: .32rem;
                  img{
                      width: 100%;
                      height: 100%;
                  }
              }
            }
        }
    }

    .discount{
        .pic{
            width: 100%;
            height: 2.34rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .area{
        width: 100%;
        height: 3.44rem;
        background: #fff;
        border-top: 1px solid #ccc;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-wrap: wrap;
            a{
                width: 1.4rem;
                height: 1.48rem;
                padding-left: .16rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .pic{
                    width: .8rem;
                    height: .8rem;
                    img{
                      width: 100%;
                      height: 100%;
                    }
                }
                .name{
                    padding-top: .2rem;
                    color: #666;
                }
            }
        }
    }
    .gift{
        width: 100%;
        height: 3.72rem;
        background: #fff;
        margin: .2rem 0;
        .pic{
            width: 100%;
            height: 3.6rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .ltime{
        width: 100%;
        height: 4.4rem;
        background: #fff;
        .top{
            width: 6.9rem;
            height: .88rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: .2rem;
            .left{
                width: 1.2rem;
                height: .44rem;
                font-size: .3rem;
                color: #333;
                font-weight: 700;
            }
            .right{
                width: 2.48rem;
                height: .56rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .bottom{
           width: 7rem;
           height: 3.54rem;
           display: flex;
           flex: 1;
           overflow: auto;
           margin-left:0.25rem;
           a{
             width: 2.2rem;
             height: 3.54rem;
             margin: 0 .2rem;
             display: flex;
             flex-direction: column;
             .pic{
                width: 2.1rem;
                height: 2.1rem; 
                img{
                  width: 100%;
                  height: 100%;
                }
             }
             .name{
                width: 2rem;
                height: .42rem;
                line-height: .42rem;
                font-size: .25rem;
                color: #333;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
             }
             .activity{
                width: 1rem;
                border: 1px solid #ff550f;
                border-radius: 35%;
                text-align: center;
                color: #ff550f;
             }
             .price{
                width: 1.4rem;
                height: .42rem;
                line-height: .42rem;
                color: red;
                font-size: .225rem;
             }
           }
        }
    }

    .special{
        width: 100%;
        min-height: 8rem;
        background: #fff;
        .pic{
          width: 100%;
          height: 12rem;
            span{
              display: block;
              float: left;
            }
            .z1{
                width: 48%;
                height: 5.02rem;
                margin: 0 .06rem;
                img{
                  width: 100%;
                  height: 100%;
                }
            }
            .z2{
                width: 33%;
                height: 3.6rem;
                padding: .2rem;
                img{
                  width: 100%;
                  height: 100%;
                }
            }
            .z3{
                margin-left: .2rem;
            }
            
        }
    }

    .love{
        width: 100%;
        height: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        h2{
          font-size: .275rem;
          .pic{
            width: .32rem;
            height: .32rem;
            display: block;
            float: left;
            color: #333;
            font-weight: bolder;
              img{
                  width: 100%;
                  height: 100%;
              }
          }
        }
      }   
      
    .list{
        width: 100%;
        height: 20rem;
        background: #fff;
        a{
            width: 50%;
            height: 5rem;
            display: flex;
            flex-direction: column;
            float: left;
            background:#fff;
            .pic{
                width: 3.5rem;
                height: 3.5rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                width: 3.7rem;
                height: .58rem;
                line-height: .58rem;
                font-size: .3rem;
                color: #333;
                font-weight: 700;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                padding-left: .2rem;  
            }
            .price{
                width: 100%;
                height: .4rem;
                padding-left: .2rem;
                font-size: .3rem;
                color: red;
                .jg{
                  width: 60%;
                  float: left;
                  line-height: .66rem;
                }
                .shopcar{
                    width: .88rem;
                    height: .88rem;
                    float: right;
                    color: red;
                    font-size: .4rem;
                    padding-right: .2rem;
                        i{  
                            width: .5rem;
                            height: .5rem;
                            border: 1px solid red;
                            border-radius: 50%;
                        }
                    }

            }
           
        }
    }
  }
}
</style>
