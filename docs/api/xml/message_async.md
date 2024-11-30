---
title: Asynchronous sending of messages
sidebar_label: Asynchronous sending of messages
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request for sending messages asynchronously.
A large packet of messages can be sent asynchronously. The system accepts all messages to be sent, and in response it gives a task ID, by which you can find out the status and result of its execution.

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
                                        <a class="name">**message-async**</a>
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
                    <message-async>
                        <msg id="1234" recipient="+380971234567" sender="SMSTest" type="0">Message text to be sent via SMS</msg>
                        <msg id="4321" recipient="+380501234567" sender="SMSTest" type="0">Message text to be sent via SMS</msg>
                    </message-async>
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
                                        <a class="name">**message-async**</a>
                                        <a class="type">tag</a> <br/>
                                        <a class="description">Tag specifying the type of request</a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**job**</a>
                                                    <a class="type">tag | varchar(64)</a> <br/>
                                                    <a class="description">Tag containing task ID</a>
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
                    { label: 'Successful', value: 'successful', }
                ]}
                >
                <TabItem value="successful">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package>
                    <message-async>
                        <job>8714ea91e9bb454d25ef42ba6f18ea4e</job>
                    </message-async>
                </package>
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>
