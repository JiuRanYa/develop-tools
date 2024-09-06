use tauri::{AppHandle, Manager};

pub fn event_handle(app: &AppHandle) {
    let window = app.get_window("main").unwrap();
    let callback_app_handle = app.app_handle().clone();

    window.listen("pick_color", |event| {
        println!("got window event-name with payload {:?}", event.payload());
    });
}
