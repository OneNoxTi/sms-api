---
id: rcs_android
title: RCS Android (WIP)
---

On this tab, you can create mass mailings of messages that will be sent using the RCS (Rich Communication Services) protocol.

To open this tab, select **SMS** → **Send SMS** in the side menu and select **RCS ANDROID** tab.

![image1](/img/uk/client_send_sms_bulk_sms/image1.png)

## Create a mailing

To create a new mailing, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **recipient phone number** <br/> You can also enter multiple numbers separated by commas (e.g. 0501234567, 39371234567) |
| 2 | Or Select **recipients' phone numbers** from previously added address books <br/> To create an address book and add recipient numbers to it, go to [**RECIPIENTS**](../address_book/recipients.md) tab in the **Address Book** section |
| 3 | Enter the **Sender ID** or select from a list of previously added Sender IDs. Click the **Sender ID** field to open that list |
| 4 | Select the **date** on which you want to send the message. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 5 | Specify the **time** to send the message. You can enter the time manually or select from the list by pressing the **Clock** icon on the right side of the field (be sure to specify **Kyiv** time) |
| 6 | Enter the **mailing name** to help you easily navigate through the reports in the future |
| 7 | Enter the **message text** (sign limits per message: **70** for cyrillic and **160** for latin) <br/> Use the **VARIABLE VALUE** button to add a variable to the message text <br/> The right side of the message text input field shows the **number of entered signs** and **the number of messages** required to send the entered text <br/> You can also switch the message text from cyrillic to latin and vice versa using the **LATIN/CYRILLIC** selector <br/> You can also insert a template into the message text by clicking the **INSERT TEMPLATE** button |
| 8 | If you want to send an image in the message, click on the **IMAGE** field and select the desired **Image file** on your device |
| 9 | You can also add a button to your message that will take you to a link when clicked [10]. Specify the **Caption** to be displayed on the button |
| 10 | Specify the **Link** that will be followed after pressing the button |
| 11 | To check what the message will be like for the recipients, you can send yourself a test SMS. To do this, enter your **phone number** and press **SEND** |

Press **EXECUTE** to send the message.

![image2](/img/uk/client_send_sms_single_sms/image2.png)

## Resending by SMS

You can also send text sms messages in addition to RCS messages. To do this, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Select the **Resend by SMS** checkbox |
| 2 | Enter the **Sender ID** or select from a list of previously added Sender IDs. Click the **Sender ID** field to open that list |
| 3 | Enter the **message text** (sign limits per message: **70** for cyrillic and **160** for latin) <br/> Use the **VARIABLE VALUE** button to add a variable to the message text <br/> The right side of the message text input field shows the **number of entered signs** and **the number of messages** required to send the entered text <br/> You can also switch the message text from cyrillic to latin and vice versa using the **LATIN/CYRILLIC** selector <br/> You can also insert a template into the message text by clicking the **INSERT TEMPLATE** button* |
| 4 | To check what the message will be like for the recipients, you can send yourself a test SMS. To do this, enter your **phone number** and press **SEND** |

Press **EXECUTE** to send the message.

![image6](/img/uk/client_send_sms_viber/image6.png)

## Advanced options

You can also apply additional options when you create a mailing. Click **Advanced options** to expand them.

![image3](/img/uk/client_send_sms_bulk_sms/image3.png)

|  №  | Option | Description |
| :-: | ------ | ----------- |
| 1 | **Mailing is valid until (Date)** | The date until which the mailing will be active. SMS messages will not be sent to recipients after the specified date and time |
| 2 | **Mailing is valid until (Time)** | The time until which the mailing will be active. SMS messages will not be sent to recipients after the specified date and time (be sure to specify **Kyiv** time) |
| 3 | **Wap-Push link** | Wap-Push message is a specially formed message containing a link to a certain internet resource <br/> After receiving WAP push message, the recipient can follow this link on his/her cell phone <br/> Please notice that the recipient will be able to open the Wap-Push link only if the phone has WAP settings |
| 4 | **Flash-SMS** | Flash-SMS is an SMS message that is immediately displayed on the phone screen when received. Flash-SMS are not stored in the phone memory or on the SIM card <br/> Features: <ul><li>Only one part of the SMS</li><li>Sender's name is not transmitted</li><li>Delivered if the recipient is on the line and not talking on the phone</li></ul> |
| 5 | **HLR** | HLR Lookup (Home Location Register) is a service for checking the validity of a number, as well as for obtaining detailed information about number, including identification of the mobile operator and whether the number is roaming <br/> The service is absolutely confidential, the recipient does not receive any notification, as the request is directed to the equipment of the communication operator <br/> Advantages: <ul><li>Cleaning of your customer base from non-working phones</li><li>Saving money before sending mailings</li><li>Roaming detection</li><li>Possibility to use the service both through Web interface, as well as integrate with API</li></ul> |
| 6 | **Send me SMS upon completion of mailing** | Upon completion of the mailing you will be sent an SMS notification |

## Check the cost

To check the cost of sending messages, click **HOW MUCH IS IT?** to the right of the **EXECUTE** button.

![image4](/img/en/client_send_sms_bulk_sms/image4.png)

The **SMS Sending** pop-up window opens with detailed information about the cost of sending the message(s).
