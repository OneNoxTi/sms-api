---
id: api_settings
title: API
slug: /api_settings
---

In this tab you can customize the API integration and generate a new API key. You can also send a test XML request to the specified address.

To open this tab, open the **Settings** section and select the **API** tab.

![image1](/img/instruction/sms/settings/api_settings/image1.png)

## API key

At the top of the page in the **Your key** line is your current **API key**.

![image2](/img/instruction/sms/settings/api_settings/image2.png)

By default the **API key** is partially hidden, the full **API key** is only displayed immediately after generation. Therefore it is better to save the **API key** right after generation.

To generate a new API key click the **Update** button icon on the right side of the **Your key** line.

![image3](/img/instruction/sms/settings/api_settings/image3.png)

Also to the right of the **Your key** field is a link to the integration documentation.

![image4](/img/instruction/sms/settings/api_settings/image4.png)

## Settings

In the **API** tab you can enable or disable the required services and protocols, as well as specify additional settings.

![image5](/img/instruction/sms/settings/api_settings/image5.png)

|  №  | Description |
| :-: | ----------- |
| 1 | **Activate Email2SMS** - with the Email2SMS (Email to SMS) gateway, you can send SMS via email. SMS messages can be delivered to one or many recipients. The gateway reads each incoming email, parses it, and sends the SMS |
| 2 | **Activate API** - using API you can connect SMS and Viber distribution for your website or software via such protocols as JSON, HTTP or XML POST |
| 3 | **Activate SMPP** - the Short Message Peer to Peer (SMPP) protocol is an open, industry standard protocol designed to provide a flexible data communications interface for transfer of short message data |
| 4 | **IP address from which you are allowed access to the API and SMPP** |
| 5 | **URL/Email for notification about SMS statuses** |

Press the **SAVE** button to save the settings.

## Test XML

To test an XML query, enter it in the **Text XML** field and click the **SEND** button.

![image6](/img/instruction/sms/settings/api_settings/image6.png)

After the query is executed, a field with the **response** is displayed on the right side of the **Text XML** field.

![image7](/img/instruction/sms/settings/api_settings/image7.png)
