const { playerRouter } = require("./Userplayer.routes")

const rootRouter=(app)=>{
     playerRouter(app)
}
module.exports={rootRouter}