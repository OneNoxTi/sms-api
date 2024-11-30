---
title: Send Viber message with image
sidebar_label: Send Viber (Image)
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of request to send Viber message with image to the specified number.

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
                                        <a class="name">**message-viber**</a>
                                        <a class="type">tag</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Tag specifying the type of request</a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**msg**</a>
                                                    <a class="type">tag</a><br/>
                                                    <a class="description">Message tag</a>
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
                                                                <a class="name">**phone**</a>
                                                                <a class="type">tag | varchar(21)</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Phone number of the recipient of the message</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="name">**sender**</a>
                                                                <a class="type">tag | varchar(11)</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Signature in the message</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="name">**type**</a>
                                                                <a class="type">tag | string</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Type of message: <ul><li>**text** - usual message</li><li>**image** - message with picture</li><li>**button** - message with a picture and a button</li></ul></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="name">**text**</a>
                                                                <a class="type">tag</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Message text in UTF8 encoding</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a class="name">**image**</a>
                                                                <a class="type">tag</a>
                                                                <a class="required">required</a> <br/>
                                                                <a class="description">Image URL <br/> Image format: `.jpg` `.jpeg` `.png` `.gif`</a>
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
                    <message-viber>
                        <msg id="1234">
                            <phone>+380971234567</phone>
                            <sender>SMSTest</sender>
                            <type>image</type>
                            <text>Message text to be sent via Viber</text>
                            <image>https://image.url/image.png</image>
                        </msg>
                    </message-viber>
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
                                                                <a class="attribute">**msg_id**</a>
                                                                <a class="type">attribute | integer</a> <br/>
                                                                <a class="description">Numeric message identifier assigned by the gateway</a>
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
                    <message-viber>
                        <msg id="1234" msg_id="1234568">1</msg>
                    </message-viber>
                </package>
                ```
                </TabItem>
                <TabItem value="error">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package>
                    <message-viber>
                        <msg id="7777" msg_id="0">201</msg>
                    </message-viber>
                </package>
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>
