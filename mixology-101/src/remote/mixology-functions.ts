import {mixologyBaseClient} from "."

export const mixologyAddReview = async ( description:string, rate:number , userid:number, drinkid:number) =>{
    let credentials ={
        "id"  : 0 ,
        "userid": `${userid}`,
        "description" : `${description}`,
        "rate" : `${rate}`,
        "drinkid" : `${drinkid}`
    }
    try{
        let res = await mixologyBaseClient.post('/review', credentials)//.then((response)=> console.log(response.data))
        console.log(res.data)
        console.log(res)

        return res.data
    }catch(e){
        console.log(e);
        if(e.response){
            throw new Error(e.resonse.data)
        }else{
            throw new Error("OOPs something else went wrong ")
        }
    }
}
