---
id: bulk_sms_reports
title: Bulk SMS
sidebar_label: Bulk SMS
slug: /client/bulk-sms-reports/
---

In this tab you can view bulk mailing reports for a specific period, as well as export the report to an xlsx file.

To open this tab, select **SMS** → **Reports** in the side menu and select **BULK SMS** tab.

![image1](/img/en/client_reports_bulk_sms/image1.png)

## Period selection

To select the **time period** for which you want to display reports, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, the page will be refreshed to display reports for the specified period.

![image2](/img/en/client_reports_bulk_sms/image2.png)

## Search

You can also find specific reports by **name**, **content** or **Sender ID**. To search for reports, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Specify a search parameter: <li>**Everywhere**</li> <li>**By name**</li> <li>**By content**</li> <li>**By Sender ID**</li> |
| 2 | Enter the **parameter value** to search for the report |

Next, click **SEARCH**, the page will be refreshed and reports for the specified parameters will be displayed.

![image3](/img/en/client_reports_bulk_sms/image3.png)

## Reports list

All bulk mailing reports are located in the table on the **BULK SMS** tab.

![image4](/img/en/client_reports_bulk_sms/image4.png)

|  №  | Data |
| :-: | ---- |
| 1 | **Mailing name** and **SMS status** |
| 2 | **Sender ID** |
| 3 | Date and time of the **beginning** and **end** of the mailing |
| 4 | **Number of SMS** and their **price** |

Click on the report to view the text of the message.

![image5](/img/en/client_reports_bulk_sms/image5.png)

## Additional actions with mailing

On the right side of the message text field there is a menu of additional actions:

![image6](/img/en/client_reports_bulk_sms/image6.png)

|  №  | Action | Description |
| :-: | ------ | ----------- |
| 1 | **DETAIL** | View detailed [mailing report](#mailing-report) |
| 2 | **Export** | [Export reports](#exporting-a-report) for all messages |
| 3 | **Export delivered** | [Export reports](#exporting-a-report) for delivered messages only |

## Mailing report

The page with the mailing report is visually divided into three blocks:

![image7](/img/en/client_reports_bulk_sms/image7.png)

|  №  | Description |
| :-: | ----------- |
| 1 | [Detailed information](#detailed-information) about sms mailing |
| 2 | Circle diagram with statistics on **statuses** and **operators**. To toggle the chart display, use the **STATUSES/OPERATORS** switch above the chart |
| 3 | Table with a [report for each recipient](#report-for-each-recipient) |

### Detailed information

Detailed information about sms mailing contains the following information:

![image8](/img/en/client_reports_bulk_sms/image8.png)

|  №  | Data | Description |
| :-: | ---- | ----------- |
| 1 | **Mailing ID** | Unique mailing identifier |
| 2 | **Mailing Name** | The name of the mailing list added at creation |
| 3 | **Sender ID** | Sender's name |
| 4 | **Creation date** | Date and time when the mailing was created |
| 5 | **Start sending** | Date and time of the beginning of the mailing |
| 6 | **End of sending** | Date and time of the end of mailing |
| 7 | **The volume of sending** | Number of messages in the mailing |
| 8 | **Sent** | Number of sent messages |
| 9 | **Delivered** | Number of delivered messages. Press **SAVE LIST** to save the list of contacts to which the SMS has been delivered to a individual [address book](../address_book/recipients.md) |
| 10 | **DeliveredSMS** | Number of delivered SMS messages |
| 11 | **DeliveredViber** | Number of delivered Viber messages |
| 12 | **ReadViber** | Number of read Viber messages |
| 13 | **Q-ty of characters / parts** | The number of signs in the message text and the number of messages required to send this text |
| 14 | **Message text** | Text of the message to be sent |

### Report for each recipient

At the bottom of the mailing report page is a table that contains statistics for each recipient.

#### Search

To find a report by a specific number, enter the number in the **search field**. Then press **[ Enter ]** on the device keyboard or the **Search button icon** on the right side of the field.

![image9](/img/en/client_reports_bulk_sms/image9.png)

You can also display only delivered messages in the table. To do this, select the **Delivered** status from the **Select status** drop-down list.

![image10](/img/en/client_reports_bulk_sms/image10.png)

#### Report table

The information in the report is presented in separate columns:

![image11](/img/en/client_reports_bulk_sms/image11.png)

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Phone** | Recipient's phone number |
| 2 | **Operator** | Name of the mobile operator servicing this number |
| 3 | **Status** | Current status of the message |
| 4 | **Price** | Price of sending a message to this number |
| 5 | **Date** | Date and time the message was sent |

## Exporting a report

The report must be generated before saving, to do this, click the **Export** or **Export delivered** button in the [menu of additional actions](#additional-actions-with-mailing).

After a while the report will be generated and can be downloaded by clicking the **DOWNLOAD** button.

![image12](/img/en/client_reports_bulk_sms/image12.png)

The report will be saved on your device in an **.xlsx** file.
