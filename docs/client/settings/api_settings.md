---
id: api_settings
title: API
sidebar_label: API
slug: /client/api-settings/
---

In this tab you can customize the API integration and generate a new API key. You can also send a test XML request to the specified address.

To open this tab, select **SMS** → **Settings** in the side menu and select **API** tab.

![image1](/img/en/client_settings_api/image1.png "API") <center><u>API - photo 1</u></center>

## How to get an API key

At the top of the page in the **Your key** line is your current **API key**.

![image2](/img/en/client_settings_api/image2.png "API") <center><u>API - photo 2</u></center>

By default the **API key** is partially hidden, the full **API key** is only displayed immediately after generation. Therefore it is better to save the **API key** right after generation.

To generate a new API key click the **Update** button icon on the right side of the **Your key** line.

![image3](/img/en/client_settings_api/image3.png "API") <center><u>API - photo 3</u></center>

Also to the right of the **Your key** field is a link to the integration documentation.

![image4](/img/en/client_settings_api/image4.png "API") <center><u>API - photo 4</u></center>

## Settings

In the **API** tab you can enable or disable the required services and protocols, as well as specify additional settings.

![image5](/img/en/client_settings_api/image5.png "API") <center><u>API - photo 5</u></center>

|  №  | Setting | Description |
| :-: | ------- | ----------- |
| 1 | **Activate Email2SMS** | With the Email2SMS (Email to SMS) gateway, you can send SMS via email. SMS messages can be delivered to one or many recipients. The gateway reads each incoming email, parses it, and sends the SMS |
| 2 | **Activate API** | Using API you can connect SMS and Viber distribution for your website or software via such protocols as JSON, HTTP or XML POST |
| 3 | **Activate SMPP** | The Short Message Peer to Peer (SMPP) protocol is an open, industry standard protocol designed to provide a flexible data communications interface for transfer of short message data |
| 4 | **IP address from which you are allowed access to the API and SMPP** |  |
| 5 | **URL/Email for notification about SMS statuses** |  |

Press the **SAVE** button to save the settings.

## Test XML

To test an XML query, enter it in the **Text XML** field and click the **SEND** button.

![image6](/img/en/client_settings_api/image6.png "API") <center><u>API - photo 6</u></center>

After the query is executed, a field with the **response** is displayed on the right side of the **Text XML** field.

![image7](/img/en/client_settings_api/image7.png "API") <center><u>API - photo 7</u></center>
