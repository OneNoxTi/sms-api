---
id: clients
title: Clients
sidebar_label: Clients
slug: /admin/clients/
---

This section contains a list of your clients with detailed information about them. Also in this section you can view detailed statistics of the client, as well as manage the balance of his account.

To open this section, select **Clients** → **Clients** in the side menu.

![image1](/img/en/admin_clients_clients/image1.png "Clients") <center><u>Clients - photo 1</u></center>

## Interface

For the convenience of working with the contents of the table, it is possible to select the number of records to be displayed on the page. You can choose 10 or 20 rows.

To change the **number of entries** displayed on the client list **page**, click the number of pages icon at the bottom of the page.

By default, up to 10 entries are displayed per page.

![image2](/img/en/admin_clients_clients/image2.png "Clients") <center><u>Clients - photo 2</u></center>

Use the **Left** and **Right** navigation buttons at the bottom of the page to switch pages. You can also enter the number of the desired page to jump to it.

![image3](/img/en/admin_clients_clients/image3.png "Clients") <center><u>Clients - photo 3</u></center>

## Search

To search for a specific client, enter the desired value in the **User search** field and press the Search button icon or **[ Enter ]** key. You can search for a client by **ID**, **login**, **company name** or **client name**.

![image4](/img/en/admin_clients_clients/image4.png "Clients") <center><u>Clients - photo 4</u></center>

## Client table

The table contains a list of clients with detailed information about them. The data is arranged in separate columns.

![image5](/img/en/admin_clients_clients/image5.png "Clients") <center><u>Clients - photo 5</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **ID** | Internal unique identifier of the client <br/> You can sort the list of clients by ID, to do this, click the relevant icon in the ID column: <li>**🠗** - descending order</li><li>**🠕** - ascending order</li> |
| 2 | **Login** | Client login (phone number) |
| 3 | **Company** | Client's company name |
| 4 | **Name** | Client name |
| 5 | **SMS Price** | Cost of sending a message for a client |
| 6 | **Balance** | Current balance of the client's account |
| 7 | **Credit** | Credit balance of the customer's account |
| 8 | **Channel** |  |

## Client page

To view the client page, in the table, click on the row of the desired client.

![image6](/img/en/admin_clients_clients/image6.png "Clients") <center><u>Clients - photo 6</u></center>

The **client page** contains the following tabs:

![image7](/img/en/admin_clients_clients/image7.png "Clients") <center><u>Clients - photo 7</u></center>

|  №  | Tab | Description |
| :-: | --- | ----------- |
| 1 | [**GENERAL INFO**](#general-info) | Contains basic customer information and also allows you to manage SMS subscription |
| 2 | [**FINANCE**](#finance) | Allows you to view the client's balance change history, top up the account balance and set a credit balance |
| 3 | [**STATISTICS**](#statistics) | Allows you to view detailed mailing statistics |
| 4 | [**NAMES**](#names) | Allows you to view and edit the Sender ID of the client |

### GENERAL INFO

The **GENERAL INFO** tab contains the following information about the client:

![image8](/img/en/admin_clients_clients/image8.png "Clients") <center><u>Clients - photo 8</u></center>

|  №  | Data | Description |
| :-: | ---- | ----------- |
| 1 | **Site** | Client's company website |
| 2 | **Email** | Client's e-mail address |
| 3 | **Region** | Client's region of residence |
| 4 | **Company** | Client's company name |
| 5 | **Type of activity** | Type of activity of the client's company |
| 6 | **Property Type** | <li>**Legal entity**</li><li>**Individual**</li><li>**Entrepreneur**</li> |
| 7 | **Address, postal** | Client's postal address |
| 8 | **Email accounting** | The e-mail address of the client company's accounting department |
| 9 | **Email** |  |
| 10 | **Registration Date** | Date and time of client registration |
| 11 | **Last login date** | Date and time of the last client login |
| 12 | **Detailed statistics** | Link to the client's detailed statistical report |
| 13 | **Login attempts** | Number of unsuccessful attempts to log in to the cabinet |
| 14 | **Activation** | Is activation of the client's account required |
| 15 | **Referer** |  |

To enable/disable the client's SMS subscription, check the **SMS subscription** checkbox (or uncheck it). Then press **SAVE**.

![image9](/img/en/admin_clients_clients/image9.png "Clients") <center><u>Clients - photo 9</u></center>

### FINANCE

The top left of the **FINANCE** tab shows the current account balance and credit balance.

![image10](/img/en/admin_clients_clients/image10.png "Clients") <center><u>Clients - photo 10</u></center>

#### Set credit

Follow the steps below to set the credit balance:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **amount** of the credit |
| 2 | Check the checkbox if it is necessary to **notify the customer** of a change in credit balance |

Press the **SAVE** button to save your changes.

![image11](/img/en/admin_clients_clients/image11.png "Clients") <center><u>Clients - photo 11</u></center>

#### Top up account

Follow the steps below to top up your client's account:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **amount** of top-up |
| 2 | Add a **comment** if necessary |

Press the **SAVE** button to top up.

![image12](/img/en/admin_clients_clients/image12.png "Clients") <center><u>Clients - photo 12</u></center>

#### Period selection

To select the **time period** for which you want to display the transaction history, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, the page will be refresh and display the transaction history for the specified period.

![image13](/img/en/admin_clients_clients/image13.png "Clients") <center><u>Clients - photo 13</u></center>

#### Transactions list

All transaction history of the account balance are located in the table in separate columns:

![image14](/img/en/admin_clients_clients/image14.png "Clients") <center><u>Clients - photo 14</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Date** | Date and time of the transaction (sending a message or balance top-up) |
| 2 | **Credit** | Mailing costs (in the currency of the client's account) |
| 3 | **Debit** | Account top-up (in the currency of the client's account) |
| 4 | **Purpose** | Transaction assignment |
| 5 | **Balance** | Balance status after the transaction (in the currency of the client's account) |

#### Exporting a transaction history

To export transaction history click the **Export** button icon.

![image15](/img/en/admin_clients_clients/image15.png "Clients") <center><u>Clients - photo 15</u></center>

After pressing the **Export** button icon, the report will be saved on your device in an **.xlsx** file.

### STATISTICS

The **STATISTICS** tab contains several reports on which you can view the statistics and effectiveness of the mailing.

#### GROUPING BY DAY

In this report you can view statistics by day and also check the efficiency of the mailing.

To open this report, open the **STATISTICS** tab and select the **GROUPING BY DAY** report.

![image16](/img/en/admin_clients_clients/image16.png "Clients") <center><u>Clients - photo 16</u></center>

##### Period selection

To select the **time period** for which you want to display statistic, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, click the **SEARCH** button. The page will be refreshed and display statistics for the specified period.

![image17](/img/en/admin_clients_clients/image17.png "Clients") <center><u>Clients - photo 17</u></center>

##### Exporting a report

To export statistical reporting click the **Export** button icon to the right of the **SEARCH** button.

![image18](/img/en/admin_clients_clients/image18.png "Clients") <center><u>Clients - photo 18</u></center>

A new pop-up window will open where you need to select the data you want to export. After selecting the data, click the **EXPORT** button to export. To cancel, click the **CANCEL** button.

![image19](/img/en/admin_clients_clients/image19.png "Clients") <center><u>Clients - photo 19</u></center>

After pressing the **EXPORT** button, the report will be saved on your device in an **.xlsx** file.

##### Statistics chart

This chart displays the number of sent and delivered messages for each day of the specified period.

![image20](/img/en/admin_clients_clients/image20.png "Clients") <center><u>Clients - photo 20</u></center>

**Blue plot** - number of messages sent. **Purple plot** - number of delivered messages.

##### Statistics table

All statistical data are arranged in the table in separate columns:

![image21](/img/en/admin_clients_clients/image21.png "Clients") <center><u>Clients - photo 21</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Date** | Date of sending messages |
| 2 | **Send SMS (parts)** | Number of sent messages (parts) |
| 3 | **SMS (Parts) Delivered** | Number of delivered messages (parts) |
| 4 | **Efficiency** | Mailing efficiency (number of delivered messages out of the total number of sent messages ) |
| 5 | **SMS Price** | Messaging costs |

#### GROUPING BY OPERATOR

In this report you can view statistics by operators and also check the efficiency of the mailing.

To open this report, open the **STATISTICS** tab and select the **GROUPING BY OPERATOR** report.

![image22](/img/en/admin_clients_clients/image22.png "Clients") <center><u>Clients - photo 22</u></center>

##### Period selection

To select the **time period** for which you want to display statistic, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, click the **SEARCH** button. The page will be refreshed and display statistics for the specified period.

![image23](/img/en/admin_clients_clients/image23.png "Clients") <center><u>Clients - photo 23</u></center>

##### Exporting a report

To export statistical reporting click the **Export** button icon to the right of the **SEARCH** button.

![image24](/img/en/admin_clients_clients/image24.png "Clients") <center><u>Clients - photo 24</u></center>

A new pop-up window will open where you need to select the data you want to export. After selecting the data, click the **EXPORT** button to export. To cancel, click the **CANCEL** button.

![image25](/img/en/admin_clients_clients/image25.png "Clients") <center><u>Clients - photo 25</u></center>

After pressing the **EXPORT** button, the report will be saved on your device in an **.xlsx** file.

##### Statistics chart

This chart displays the number of sent messages for each operator. Statistics are displayed for the specified period.

![image26](/img/en/admin_clients_clients/image26.png "Clients") <center><u>Clients - photo 26</u></center>

##### Statistics table

All statistical data are arranged in the table in separate columns:

![image27](/img/en/admin_clients_clients/image27.png "Clients") <center><u>Clients - photo 27</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Country - Operator** | Country and operator name |
| 2 | **Send SMS (parts)** | Number of sent messages (parts) |
| 3 | **SMS (Parts) Delivered** | Number of delivered messages (parts) |
| 4 | **Efficiency** | Mailing efficiency (number of delivered messages out of the total number of sent messages ) |
| 5 | **SMS Price** | Messaging costs |

#### GROUPING BY SENDER ID

In this report you can view statistics by sender id and also check the efficiency of the mailing.

To open this report, open the **STATISTICS** tab and select the **GROUPING BY SENDER ID** report.

![image28](/img/en/admin_clients_clients/image28.png "Clients") <center><u>Clients - photo 28</u></center>

##### Period selection

To select the **time period** for which you want to display statistic, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, click the **SEARCH** button. The page will be refreshed and display statistics for the specified period.

![image29](/img/en/admin_clients_clients/image29.png "Clients") <center><u>Clients - photo 29</u></center>

##### Exporting a report

To export statistical reporting click the **Export** button icon to the right of the **SEARCH** button.

![image30](/img/en/admin_clients_clients/image30.png "Clients") <center><u>Clients - photo 30</u></center>

A new pop-up window will open where you need to select the data you want to export. After selecting the data, click the **EXPORT** button to export. To cancel, click the **CANCEL** button.

![image31](/img/en/admin_clients_clients/image31.png "Clients") <center><u>Clients - photo 31</u></center>

After pressing the **EXPORT** button, the report will be saved on your device in an **.xlsx** file.

##### Statistics chart

This chart displays the number of sent messages for each sender ID. Statistics are displayed for the specified period.

![image32](/img/en/admin_clients_clients/image32.png "Clients") <center><u>Clients - photo 32</u></center>

##### Statistics table

All statistical data are arranged in the table in separate columns:

![image33](/img/en/admin_clients_clients/image33.png "Clients") <center><u>Clients - photo 33</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Sender ID** | Sender's name (ID) |
| 2 | **Send SMS (parts)** | Number of sent messages (parts) |
| 3 | **SMS (Parts) Delivered** | Number of delivered messages (parts) |
| 4 | **Efficiency** | Mailing efficiency (number of delivered messages out of the total number of sent messages ) |
| 5 | **SMS Price** | Messaging costs |

#### GROUPING BY VIBER SENDER ID

In this report you can view statistics by viber sender id and also check the efficiency of the mailing.

To open this report, open the **STATISTICS** tab and select the **GROUPING BY VIBER SENDER ID** report.

![image34](/img/en/admin_clients_clients/image34.png "Clients") <center><u>Clients - photo 34</u></center>

##### Period selection

To select the **time period** for which you want to display statistic, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, click the **SEARCH** button. The page will be refreshed and display statistics for the specified period.

![image35](/img/en/admin_clients_clients/image35.png "Clients") <center><u>Clients - photo 35</u></center>

##### Exporting a report

To export statistical reporting click the **Export** button icon to the right of the **SEARCH** button.

![image36](/img/en/admin_clients_clients/image36.png "Clients") <center><u>Clients - photo 36</u></center>

A new pop-up window will open where you need to select the data you want to export. After selecting the data, click the **EXPORT** button to export. To cancel, click the **CANCEL** button.

![image37](/img/en/admin_clients_clients/image37.png "Clients") <center><u>Clients - photo 37</u></center>

After pressing the **EXPORT** button, the report will be saved on your device in an **.xlsx** file.

##### Statistics chart

This chart displays the number of sent viber messages for each sender ID. Statistics are displayed for the specified period.

![image38](/img/en/admin_clients_clients/image38.png "Clients") <center><u>Clients - photo 38</u></center>

##### Statistics table

All statistical data are arranged in the table in separate columns:

![image39](/img/en/admin_clients_clients/image39.png "Clients") <center><u>Clients - photo 39</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Sender ID** | Sender's name (ID) |
| 2 | **Send SMS (parts)** | Number of sent messages (parts) |
| 3 | **SMS (Parts) Delivered** | Number of delivered messages (parts) |
| 4 | **Efficiency** | Mailing efficiency (number of delivered messages out of the total number of sent messages ) |
| 5 | **SMS Price** | Messaging costs |

#### GROUPING BY COUNTRY

In this report you can view statistics by country and also check the efficiency of the mailing.

To open this report, open the **STATISTICS** tab and select the **GROUPING BY COUNTRY** report.

![image40](/img/en/admin_clients_clients/image40.png "Clients") <center><u>Clients - photo 40</u></center>

##### Period selection

To select the **time period** for which you want to display statistic, follow the steps below:

|  №  | Action |
| :-: | ------ |
| 1 | Enter the **start date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |
| 2 | Enter the **end date**. You can enter the date manually or select it in the calendar, to do this, click the **Calendar icon** on the right side of the field |

After selecting a date, click the **SEARCH** button. The page will be refreshed and display statistics for the specified period.

![image41](/img/en/admin_clients_clients/image41.png "Clients") <center><u>Clients - photo 41</u></center>

##### Exporting a report

To export statistical reporting click the **Export** button icon to the right of the **SEARCH** button.

![image42](/img/en/admin_clients_clients/image42.png "Clients") <center><u>Clients - photo 42</u></center>

A new pop-up window will open where you need to select the data you want to export. After selecting the data, click the **EXPORT** button to export. To cancel, click the **CANCEL** button.

![image43](/img/en/admin_clients_clients/image43.png "Clients") <center><u>Clients - photo 43</u></center>

After pressing the **EXPORT** button, the report will be saved on your device in an **.xlsx** file.

##### Statistics chart

This chart displays the number of sent messages for each country. Statistics are displayed for the [specified period](#period-selection).

![image44](/img/en/admin_clients_clients/image44.png "Clients") <center><u>Clients - photo 44</u></center>

##### Statistics table

All statistical data are arranged in the table in separate columns:

![image45](/img/en/admin_clients_clients/image45.png "Clients") <center><u>Clients - photo 45</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Country** | Country name |
| 2 | **Send SMS (parts)** | Number of sent messages (parts) |
| 3 | **SMS (Parts) Delivered** | Number of delivered messages (parts) |
| 4 | **Efficiency** | Mailing efficiency (number of delivered messages out of the total number of sent messages ) |
| 5 | **SMS Price** | Messaging costs |

### NAMES

The **NAMES** tab contains a list of client sender id's with detailed information about them. These names are used for sending messages.

All client sender id's are located in a table with separate columns:

![image46](/img/en/admin_clients_clients/image46.png "Clients") <center><u>Clients - photo 46</u></center>

|  №  | Column | Description |
| :-: | ------ | ----------- |
| 1 | **Name** | Sender's name (Sender ID) |
| 2 | **Status** | Current status of the sender ID |
| 3 | **Questionnaire** | Completion of the questionnaire |
