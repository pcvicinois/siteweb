function address(name, auto, msg)
  {
    var address = name + "@(P5HOTO&/-C345LUB-789VIC##INOIS.F!R";
    address = address.replace(/[^A-Z.@.\-]/g, "").toLowerCase();
    if (auto){
        msg = address;
    }
    document.write("<a href=mailto:" + address + ">"+msg+"</a>");
  }
