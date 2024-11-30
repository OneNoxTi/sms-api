---
title: Message status
sidebar_label: Message status
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request to get the status of a message.
Message statuses contain information about the current status of the message, are updated regularly and can be requested by the user at any time.

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
                                        <a class="name">**status**</a>
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
                                                                <a class="attribute">**sms_id**</a>
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
            <div class="request-example">
                ## Request example
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package key="bb56a4369eb19***cfec6d1776bd25">
                    <status>
                        <msg id="1234"></msg>
                        <msg sms_id="1234569"></msg>
                    </status>
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
                                                        <tr>
                                                            <td>
                                                                <a class="attribute">**date_completed**</a>
                                                                <a class="type">attribute | datetime</a> <br/>
                                                                <a class="description">Date of assignment of final status in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format</a>
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
                    { label: 'Successful', value: 'successful', }
                ]}
                >
                <TabItem value="successful">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package>
                    <status>
                        <msg id="1234" sms_id="1234568" sms_count="1" date_completed="2024-11-11T12:00:00">102</msg>
                        <msg id="4321" sms_id="1234569" sms_count="1">1</msg>
                    </status>
                </package>
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>
