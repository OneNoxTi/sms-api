---
title: Scheduled SMS
sidebar_label: Scheduled SMS
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request to send a scheduled message.

`URI: /api/xml.php`

All requests to API are sent in **XML** format using the <a class="green-text">**POST**</a> method.

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## Request parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**package**</a>
                            <a class="type">tag</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Tag to transmit the credentials required for authorization</a>
                            <table class="t2">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="attribute">**key**</a>
                                        <a class="type">attribute | varchar</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**message**</a>
                                        <a class="type">tag</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Tag specifying the type of request</a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**msg**</a>
                                                    <a class="type">tag</a><br/>
                                                    <a class="description">Message tag. The message text is passed as a parameter</a>
                                                    <table class="t2">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**id**</a>
                                                                <a class="type">attribute | integer</a><br/>
                                                                <a class="description">User numeric message identifier. When used, the user must ensure that this identifier is unique within their account</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**recipient**</a>
                                                                <a class="type">attribute | varchar(21)</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Phone number of the recipient of the message</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**sender**</a>
                                                                <a class="type">attribute | varchar(11)</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Signature in the message</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**date_beg**</a>
                                                                <a class="type">attribute | datetime</a><br/>
                                                                <a class="description">Date the message was sent in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**date_end**</a>
                                                                <a class="type">attribute | datetime</a><br/>
                                                                <a class="description">The date when the message will be canceled without waiting for the recipient, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Specified to limit the lifetime of SMS messages. Minimum +1 minute, maximum +5 days from the moment of SMS sending. By default +1 day.</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**type**</a>
                                                                <a class="type">attribute | integer</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Type of message: <ul><li>**0** - usual message</li><li>**1** - flash message</li><li>**2** - wap-push message</li><li>**3** - voice message (only to home phones in Ukraine)</li></ul></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="request-example">
                ## Request example
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package key="bb56a4369eb19***cfec6d1776bd25">
                    <message>
                        <msg id="1234" recipient="+380971234567" sender="SMSTest" date_beg="2024-11-30T12:00" date_end="2024-11-31T12:00" type="0">Message text to be sent via SMS</msg>
                    </message>
                </package>
                ```
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-parameters">
            ## Response parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**package**</a>
                            <a class="type">tag</a> <br/>
                            <a class="description">Tag to transmit the credentials required for authorization</a>
                            <table class="t2">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="name">**message**</a>
                                        <a class="type">tag</a> <br/>
                                        <a class="description">Tag specifying the type of request</a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**msg**</a>
                                                    <a class="type">tag</a> <br/>
                                                    <a class="description">Message tag. [Message status](./references/message_status_codes.md) is returned as a parameter</a>
                                                    <table class="t2">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**id**</a>
                                                                <a class="type">attribute | integer</a><br/>
                                                                <a class="description">User numeric message identifier</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**sms_id**</a>
                                                                <a class="type">attribute | integer</a> <br/>
                                                                <a class="description">Numeric message identifier assigned by the gateway</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**sms_count**</a>
                                                                <a class="type">attribute | integer</a> <br/>
                                                                <a class="description">Number of messages used to send the specified text</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-example">
                ## Response examples
                <Tabs
                groupId="response-examples"
                defaultValue="successful"
                values={[
                    { label: 'Successful', value: 'successful', },
                    { label: 'Wrong message ID', value: 'error', }
                ]}
                >
                <TabItem value="successful">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package>
                    <message>
                        <msg id="1234" sms_id="1234568" sms_count="1">1</msg>
                    </message>
                </package>
                ```
                </TabItem>
                <TabItem value="error">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package>
                    <message>
                        <msg id="7777" sms_id="0" sms_count="1">201</msg>
                    </message>
                </package>
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>
