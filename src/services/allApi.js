import base_url from "./base_url";
import commonApi from "./commonApi";

export const registerApi=async(data)=>{
    return await commonApi(`${base_url}/reg`,'POST',"",data)
}
export const loginApi=async(data)=>{
    return await commonApi(`${base_url}/log`,'POST',"",data)
}
export const menRegApi=async(data)=>{
    return await commonApi(`${base_url}/menreg`,'POST',"",data)
}
export const menLogApi=async(data)=>{
    return await commonApi(`${base_url}/menlog`,'POST',"",data)
}

export const addEventApi=async(data,header)=>{
    return await commonApi(`${base_url}/addevent`,'POST',header,data)
}

export const getEventApi=async(header)=>{
    return await commonApi(`${base_url}/getevents`,'GET',header,"")
}
export const getAllEventApi=async(header)=>{
    return await commonApi(`${base_url}/getallevents`,'GET',header,"")
}

export const deleteEventApi=async(id,header)=>{
    return await commonApi(`${base_url}/deleteevent/${id}`,'DELETE',header,{})
}

export const editEventApi=async(data,id,header)=>{
    return await commonApi(`${base_url}/updateevent/${id}`,'PUT',header,data)
}



// export const addTaskApi=async(data,header)=>{
//     return await commonApi(`${base_url}/addtask`,'POST',header,data)
// }
// export const getTaskApi=async(header,searchKey)=>{
//     return await commonApi(`${base_url}/gettask?search=${searchKey}`,'GET',header,"")
// }
// export const getTaskById=async(tid,header)=>{
//     return await commonApi(`${base_url}/getbyid/${tid}`,'GET',header,"")
// }
// export const deleteTaskApi=async(id,header)=>{
//     return await commonApi(`${base_url}/deletetask/${id}`,'DELETE',header,{})
// }
// export const editTaskApi=async(data,id,header)=>{
//     return await commonApi(`${base_url}/updatetask/${id}`,'PUT',header,data)
// }
