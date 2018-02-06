/**
 * waybillManage 运输管理
*/

var mainTableDate= [
    {   id:'1',
        number:123,
        billStatus:'运单状态',
        billNum:'运单编号',
        postTel:'货主手机号',
        postName:'货主姓名',
        driverName:'司机姓名',
        driverBill:'司机运费',
        driverTel:'司机电话',
        carPlate:'车牌号',
        operator:'操作人',
        date:'时间',
        postStatus:'派单状态',
        refund:'是否退款',
        addService:'附加服务',
        comArea:'常运输区域',
        carKinds:'车辆类型',
        carStandard:'车辆规格',
        createTime:'创建时间',
        operation:'操作',
    }
]

//事件
const vehicleDispatch= '车辆调度'
//组件 vehicleDispatch 组件
let dispatchData = {
    carStatus:'车辆状态',
    serviceArea:'车辆服务区域',
    carStandard:'车辆规格',
    carPlate:'车牌号',
    carContract:'车辆签约状态'

}
let dispatchTable={
    driverName:'司机姓名',
    carPlate:'车牌号',
    comArea:'常运输区域',
    carStandard:'车辆规格',
    carStatus:'车辆状态',
    distance:'距离',
    carContract:'车辆签约状态'
}
//组件 abnormalData 
let  abnormalData ={
    resion:"异常原因"
   ,desc:"异常原因详情"
}
//组件 订单推送  billPush
let  pushData = {
    carStatus:'车辆状态',
    carStandard:'车辆规格',
    carContract:'车辆签约状态',
    pushRadius:'推送半径'
}