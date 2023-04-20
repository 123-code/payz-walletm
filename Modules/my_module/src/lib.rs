pub extern "C" fn sayhello()->*const u8{
    "Hello from Rust!\0".as_ptr()
}
