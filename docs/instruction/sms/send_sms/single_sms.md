---
id: single_sms
title: Single SMS
slug: /single_sms
---

In this tab you can send SMS to one number or specify several numbers using comma.

To open this tab, select **SMS** → **Send SMS** in the side menu and select **SINGLE SMS** tab.

![image1](/img/en/sms_send_sms_single_sms/image1.png)

## Sending single sms

To send a SMS message, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **recipient phone number** <br/> You can also enter multiple numbers separated by commas (e.g. 0501234567, 39371234567) |
| 2 | Enter the **Sender ID** or select from a list of previously added Sender IDs. Click the **Sender ID** field to open that list <br/> You can also register a new **Sender ID** by clicking the **REGISTER NEW SENDER ID** button to the right of the **Sender ID** field. You will be redirected to the [**SENDER ID**](sender_id.md) tab |
| 3 | Select the **date** on which you want to send the message. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 4 | Specify the **time** to send the message. You can enter the time manually or select from the list by pressing the **Clock** icon on the right side of the field. Be sure to specify **Kyiv** time |
| 5 | Enter the **message text** (sign limits per message: **70** for cyrillic and **160** for latin) <br/> Use the **VARIABLE VALUE** button to add a variable to the message text <br/> The right side of the message text input field shows the **number of entered signs** and **the number of messages** required to send the entered text <br/> You can also switch the message text from cyrillic to latin and vice versa using the **LATIN/CYRILLIC** selector |

Press **EXECUTE** to send the message.

![image2](/img/en/sms_send_sms_single_sms/image2.png)

## Advanced options

You can also apply additional options when you send sms. Click **Advanced options** to expand them.

![image3](/img/en/sms_send_sms_single_sms/image3.png)

|  №  | Option | Description |
| :-: | ------ | ----------- |
| 1 | **Wap-Push link** | Wap-Push message is a specially formed message containing a link to a certain internet resource. <br/> After receiving WAP-Push message, the recipient can follow this link on his/her cell phone. <br/> Please notice that the recipient will be able to open the Wap-Push link only if the phone has WAP settings |
| 2 | **Flash-SMS** | Flash-SMS is an SMS message that is immediately displayed on the phone screen when received. <br/> Flash-SMS are not stored in the phone memory or on the SIM card. <br/> Features: <ul><li>Only one part of the SMS</li><li>Sender's name is not transmitted</li><li>Delivered if the recipient is on the line and not talking on the phone</li></ul> |
| 3 | **HLR** | HLR Lookup (Home Location Register) is a service for checking the validity of a number, as well as for obtaining detailed information about number, including identification of the mobile operator and whether the number is roaming. <br/> The service is absolutely confidential, the recipient does not receive any notification, as the request is directed to the equipment of the communication operator. <br/> Advantages: <ul><li>Cleaning of your customer base from non-working phones</li><li>Saving money before sending mailings</li><li>Roaming detection</li><li>Possibility to use the service both through Web interface, as well as integrate with API</li></ul> |

## Check the cost

To check the cost of sending messages, click **HOW MUCH IS IT?** to the right of the **EXECUTE** button.

![image4](/img/en/sms_send_sms_single_sms/image4.png)

The **SMS Sending** pop-up window opens with detailed information about the cost of sending the message(s).

![image5](/img/en/sms_send_sms_single_sms/image5.png)

## Message preview

On the right side of the page is a window in the form of a mobile phone. This window shows a preview of your message as it will be received by the recipient.

![image6](/img/en/sms_send_sms_single_sms/image6.png)
