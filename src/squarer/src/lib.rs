use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn square(x: i32) -> i32 {
    x * x
}

#[wasm_bindgen]
pub fn square_alert(x: i32) {
    alert(&format!("{}", square(x)));
}
