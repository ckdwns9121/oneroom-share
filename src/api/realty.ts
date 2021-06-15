import axios from 'axios';
import makeFormData from '../core/lib/makeFormData';


export const requestGetRealties = async(lat:number , lng :number , filter :Array<number>)=>{
    const URL = '/api/realty';

    const config={
        headers:{
            'Content-Type' : 'application/json',
        }
    }
    const params = {
        lat,
        lng,
        filter
    };
    const res = await axios.get(URL, { params });
    return res;
}

export const requestGetRealty= async(realty_id :string | number)=>{
    const URL = '/api/realty/'+realty_id;

    const config={
        headers:{
            'Content-Type' : 'application/json',
        }
    }
    const res = await axios.get(URL, config);
    return res;
}


export const requestPostRealty = async(
    JWT_TOKEN: string,
    realty_name :string,
    realty_type:number,
    realty_kind:number,
    realty_all_floors:number,
    realty_my_floors:number,
    deposit:number,
    monthly_rent:number,
    maintenance_charge:number,
    realty_comment:string,
    addr:string,
    addr_detail:string,
    addr_extra:string,
    post_num:string,
    lat : number,
    lng:number,
    realty_subcomment:string,
    realty_options:string|object,
    realty_images:object[],
    oper_start_time:string,
    oper_end_time:string,
    realty_status:string,
    contract_images:string,
) =>{

    const URL = '/api/realty';

    const formData = makeFormData({
        realty_name,
        realty_type,
        realty_kind,
        realty_all_floors,
        realty_my_floors,
        deposit,
        monthly_rent,
        maintenance_charge,
        realty_comment,
        addr,
        addr_detail,
        addr_extra,
        post_num,
        lat,
        lng,
        realty_subcomment,
        realty_options,
        realty_images,
        oper_start_time,
        oper_end_time,
        realty_status,
        contract_images,
    });
    console.log(realty_images);

    realty_images.forEach((item : any) => {
        console.log(item);
        formData.append('realty_images', item, item.name)
    });

    const config = {
        headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
            ContentType: 'multipart/form-data',
        },
    };
    // return formData;
    const response = await axios.post(URL, formData, config);
    console.log(response);
    return response;

}


export const requsetMyRealtyList = async(JWT_TOKEN:string)=>{
    const URL = '/api/realty/my';

    const config={
        headers:{
            'Authorization' :`Bearer ${JWT_TOKEN}`,
            'Content-Type' : 'application/json',
        }
    }
    return await axios.get(URL,config).then((res)=> res) .catch((e)=> e);
} 