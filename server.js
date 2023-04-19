import express from 'express'; 
import fs from 'fs';
const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');




app.get('/:username/:websitename/:id',(req, res)=>{
        
        const a = req.params.username;
        const b = req.params.websitename;
        const c = req.params.id;
      const fileExists = fs.existsSync(`./views/${a}/${b}/${c}.ejs`);
if(fileExists){

    res.render(`./${a}/${b}/${c}`);
}else{
    res.render(`./${a}/${b}/error`);

}

});

app.get('*',(req, res)=>{
    res.render(`error`);
});
app.listen(7000);