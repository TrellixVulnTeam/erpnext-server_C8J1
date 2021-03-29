// Copyright (c) 2020, Frappe Technologies Pvt. Ltd.
// For license information, please see license.txt

$(window).bind('hashchange', function () {
    if (frappe.get_route_str() === "modules/Settings") {
        frappe.db.get_doc("Helper System Settings")
            .then(helper_settings => {
                if (helper_settings.email_message_status === "unread") {
                    frappe.msgprint({
                        title: __("Email Notice"),
                        message: __(
                            "<h5>"
                            + "For DigitalOcean Users"
                            + "</h5>"
                            + "<h5>"
                            + "New accounts may not have SMTP access enabled until they are verified and have payment history. "
                            + "In this case, your ERPNext instance may not be able to push emails out and will likely be stuck in the <i>Email Queue</i>"
                            + "</h5>"
                        ),
                        wide: true
                    }).keep_open = true;
                    frappe.db.set_value("Helper System Settings", "Helper System Settings", "email_message_status", "read")
                }
            })
    }
});

