// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;
// 구조체 타입 반환을 위한 코드
pragma experimental ABIEncoderV2; 
// 컨트랙트 배포자 확인용
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
contract WDI is Ownable{
    // 인증된 주소를 모아 놓은 구조체
    struct Auth_addresses{
        uint id;
        address wallet;
    } // 구조체 정의
    
    // 동적 구조체 배열 생성
    Auth_addresses[] adds;
    uint id_cur = 0;
    // 컨트랙트를 호출한 사용자 주소
    address private Owner = msg.sender;

    // 지갑주소가 등록되어 있는지 확인하는 함수
    function isEnroll(address _ad) public view returns(bool check){
        check = false;
        for(uint i=0;i<adds.length;i++){
            if(adds[i].wallet == _ad){
                check = true;
                break;
            }
        }
    }
    // 구조체 추가 함수
    function addAuthArray(address wallet) public onlyOwner{
        require(isEnroll(wallet)==false,"Address already registered");
        adds.push(Auth_addresses(id_cur,wallet));
        id_cur+=1; // 자동으로 다음 id
    }
    // 지갑 주소를 통해 id 값을 받아오는 함수
    function getId(address _ad) public view returns(uint ID){
        require(adds.length > 0,"Empty....");
        for(uint i=0;i<adds.length;i++){
            if(adds[i].wallet == _ad){
                ID = adds[i].id;
                break;
            }
        }
    }
    // 지갑 주소를 입력하면 배열 요소 삭제
    function remove(address _ad) public onlyOwner{
        if(getId(_ad) == adds.length-1){ // 마지막 주소를 삭제할 경우
            // 아무것도 안함.
        }
        else{
            for(uint i=getId(_ad);i<adds.length-1;i++){
                adds[i] = adds[i+1];
                adds[i].id-=1;
            }
        }
        adds.pop();
        id_cur-=1;
    }
    // 인증된 지갑 주소일 경우 로그인 승인.
    function agreeLogin() public view returns(bool check){
        if(isEnroll(Owner)) {
            check= true;
        }
        else{
            check= false;
        }
    }
    struct SignBlock{
        uint no;
        string name;
        string date;
        string depart;
        string fileName;
        string filePath;
        address writerAddr;
    }
    SignBlock[] sb;
    // 자동으로 숫자 증가
    uint no_cur = 0;
    
    function makeBlock(string memory name,string memory date,string memory depart,string memory fname, string memory fpath)  public {
        SignBlock memory tmp;
        tmp.no = no_cur++; // 추가하고 +1
        tmp.name=name;
        tmp.date=date;
        tmp.depart = depart;
        tmp.fileName=fname;
        tmp.filePath=fpath;
        tmp.writerAddr=Owner;
        sb.push(tmp);
    }

    function getBlock_name(string memory name) public view returns(SignBlock[] memory ){
        SignBlock[] memory tmp = new SignBlock[](sb.length);
        uint cnt = 0;
        for(uint i=0;i<sb.length;i++){
            if(keccak256(abi.encodePacked(sb[i].name)) == keccak256(abi.encodePacked(name))){
                tmp[cnt++] = sb[i];
            }
        }
        return tmp;
    }
    function getBlock_date(string memory date) public view returns(SignBlock[] memory ){
        SignBlock[] memory tmp = new SignBlock[](sb.length);
        uint cnt = 0;
        for(uint i=0;i<sb.length;i++){
            if(keccak256(abi.encodePacked(sb[i].date)) == keccak256(abi.encodePacked(date))){
                tmp[cnt++] = sb[i];
            }
        }
        return tmp;
    }
    function getBlock_depart(string memory depart) public view returns(SignBlock[] memory ){
        SignBlock[] memory tmp = new SignBlock[](sb.length);
        uint cnt=0;
        for(uint i=0;i<sb.length;i++){
            if(keccak256(abi.encodePacked(sb[i].depart)) == keccak256(abi.encodePacked(depart))){
                tmp[cnt++] = sb[i];
            }
        }
        return tmp;
    }
    function getBlock_fname(string memory fname) public view returns(SignBlock[] memory ){
        SignBlock[] memory tmp = new SignBlock[](sb.length);
        uint cnt=0;
        for(uint i=0;i<sb.length;i++){
            if(keccak256(abi.encodePacked(sb[i].fileName)) == keccak256(abi.encodePacked(fname))){
                tmp[cnt++] = sb[i];
            }
        }
        return tmp;
    }
    function getBlock_addr(address _addr) public view returns(SignBlock[] memory ){
        SignBlock[] memory tmp = new SignBlock[](sb.length);
        uint cnt=0;
        for(uint i=0;i<sb.length;i++){
            if(keccak256(abi.encodePacked(sb[i].writerAddr)) == keccak256(abi.encodePacked(_addr))){
                tmp[cnt++] = sb[i];
            }
        }
        return tmp;
    }
}