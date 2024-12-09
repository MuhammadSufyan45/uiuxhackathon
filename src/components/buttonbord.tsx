interface Proptype {
    item:string
};

export default function Buttonbord(props:Proptype){
    return(
        
            <button className="font-poppins font-medium border-2 border-[#9F9F9F] rounded-md sm:text-sm text-xs px-8 py-2 hover:bg-[#9F9F9F] hover:text-white">{props.item}</button>
        
    )
}