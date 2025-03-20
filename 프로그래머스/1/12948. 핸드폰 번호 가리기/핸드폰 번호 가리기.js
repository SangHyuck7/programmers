function solution(phone_number) {
    const result = [];
    const phoneNumberArr = [...phone_number];
    const phoneNumLength = phoneNumberArr.length;
    const LastPhoneNumberArr = phoneNumLength > 4 ? phoneNumberArr.splice(phoneNumLength - 4) : undefined;
    
    
    if (LastPhoneNumberArr) {
      for (let i = 0; i < phoneNumLength - 4; i++) {
          result.push("*");
      }
        
        return result.concat(LastPhoneNumberArr).join("");
    }
    
    return phone_number;
}