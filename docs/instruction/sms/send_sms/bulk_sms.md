---
id: bulk_sms
title: Bulk SMS
slug: /bulk_sms
---

In this tab you can send bulk SMS to many numbers at the same time.

To open this tab, select **SMS** → **Send SMS** in the side menu and select **BULK SMS** tab.

![image1](/img/en/sms_send_sms_bulk_sms/image1.png)

## Sending bulk sms

To perform bulk SMS sending, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Select **recipients' phone numbers** from previously added address books. <br/> To create an address book and add recipient numbers to it, go to [**RECIPIENTS**](/docs/instruction/sms/address_book/recipients.md) tab in the **Address Book** section |
| 2 | Enter the **Sender ID** or select from a list of previously added Sender IDs. Click the **Sender ID** field to open that list. <br/> You can also register a new **Sender ID** by clicking the **REGISTER NEW SENDER ID** button to the right of the **Sender ID** field. You will be redirected to the [**SENDER ID**](/docs/instruction/sms/send_sms/sender_id.md) tab |
| 3 | Select the **date** on which you want to send the message. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 4 | Specify the **time** to send the message. You can enter the time manually or select from the list by pressing the **Clock** icon on the right side of the field. Be sure to specify **Kyiv** time |
| 5 | Specify the interval **end time** for even sms mailing. You can enter the time manually or select from the list by pressing the **Clock** icon on the right side of the field. Be sure to specify **Kyiv** time. To enable evenly sms mailing, select the **Send evenly** checkbox |
| 6 | Check the **send evenly** checkbox to enable evenly SMS mailing. With even mailing, messages will be sent evenly over the time interval you select |
| 7 | Enter the **mailing name** to help you easily navigate through the reports in the future |
| 8 | Enter the **message text** (sign limits per message: **70** for cyrillic and **160** for latin). <br/> Use the **VARIABLE VALUE** button to add a variable to the message text. <br/> The right side of the message text input field shows the **number of entered signs** and **the number of messages** required to send the entered text. <br/> You can also switch the message text from cyrillic to latin and vice versa using the **LATIN/CYRILLIC** selector |
| 9 | To check what the message will be like for the recipients, you can send yourself a test SMS. To do this, **enter the number** and press **SEND** |

Press **EXECUTE** to send the message.

![image2](/img/en/sms_send_sms_bulk_sms/image2.png)

## Advanced options

You can also apply additional options when you create a mailing. Click **Advanced options** to expand them.

![image3](/img/en/sms_send_sms_bulk_sms/image3.png)

|  №  | Option | Description |
| :-: | ------ | ----------- |
| 1 | **Mailing is valid until (Date)** | The date until which the mailing will be active. SMS messages will not be sent to recipients after the specified date and time |
| 2 | **Mailing is valid until (Time)** | The time until which the mailing will be active. SMS messages will not be sent to recipients after the specified date and time. Be sure to specify **Kyiv** time |
| 3 | **Wap-Push link** | Wap-Push message is a specially formed message containing a link to a certain internet resource. <br/> After receiving WAP push message, the recipient can follow this link on his/her cell phone. <br/> Please notice that the recipient will be able to open the Wap-Push link only if the phone has WAP settings |
| 4 | **Flash-SMS** | Flash-SMS is an SMS message that is immediately displayed on the phone screen when received. <br/> Flash-SMS are not stored in the phone memory or on the SIM card. <br/> Features: <ul><li>Only one part of the SMS</li><li>Sender's name is not transmitted</li><li>Delivered if the recipient is on the line and not talking on the phone</li></ul> |
| 5 | **HLR** | HLR Lookup (Home Location Register) is a service for checking the validity of a number, as well as for obtaining detailed information about number, including identification of the mobile operator and whether the number is roaming. <br/> The service is absolutely confidential, the recipient does not receive any notification, as the request is directed to the equipment of the communication operator. <br/> Advantages: <ul><li>Cleaning of your customer base from non-working phones</li><li>Saving money before sending mailings</li><li>Roaming detection</li><li>Possibility to use the service both through Web interface, as well as integrate with API</li></ul> |
| 6 | **Send me SMS upon completion of mailing** | Upon completion of the mailing you will be sent an SMS notification |

## Check the cost

To check the cost of sending messages, click **HOW MUCH IS IT?** to the right of the **EXECUTE** button.

![image4](/img/en/sms_send_sms_bulk_sms/image4.png)

The **SMS Sending** pop-up window opens with detailed information about the cost of sending the message(s).

![image5](/img/en/sms_send_sms_bulk_sms/image5.png)

## Message preview

On the right side of the page is a window in the form of a mobile phone. This window shows a preview of your message as it will be received by the recipient.

![image6](/img/en/sms_send_sms_bulk_sms/image6.png)
