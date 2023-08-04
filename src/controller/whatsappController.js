const verifyToken = (req,res) => {
    res.send("hello Verify Token");

}

const receiveMassage = (req,res) => {
    res.send("hello  receive");
    
}

module.exports = {
    verifyToken,
    receiveMassage
}