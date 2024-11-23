---
title: Multi channel
sidebar_label: Multi channel
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This API enables multi-channel message delivery with customizable channel selection and priority setting. Users specify their desired communication channels and the sequence in the pipeline parameter, including options like voice calls, Telegram, Viber, and SMS. Telegram can be used only for one-time password (OTP) delivery, while voice calls are recommended only for OTP. SMS and Viber are suitable for both OTP and transactional messages. Each channel’s parameters, such as message content, voice settings, or signature, can be customized to tailor the message for its purpose and recipients.

`URI: /api/json.php`

All requests to API are sent in **JSON** format using the <a class="green-text">**POST**</a> method.

<div class="header">
    ## Header parameters
    Requests must contain header **Content-Type**: application/json, otherwise, the request will be considered invalid even if it has valid **JSON**.
</div>
<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## Request parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**auth**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**data**</a>
                            <a class="type">list[object]</a>
                            <a class="required">required</a> <br/>
                            <a class="description">List of objects with request parameters</a>
                            <table class="t2">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="name">**type**</a>
                                        <a class="type">string</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Request type</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**pipeline**</a>
                                        <a class="type">list[string]</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Sequence of use of communication channels</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**id**</a>
                                        <a class="type">number</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Unique message identifier in the client system</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**phone**</a>
                                        <a class="type">number</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Phone number of the recipient of the messages</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**voice**</a>
                                        <a class="type">object</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Voice message options</a>
                                        <table class="t2">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a class="name">**message**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">The text of the message to be voiced</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a class="name">**voice**</a>
                                                <a class="type">object</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Voice parameters</a>
                                                <table class="t2">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <a class="name">**gender**</a>
                                                        <a class="type">string</a>
                                                        <a class="required">required</a> <br/>
                                                        <a class="description">Voice type (male or female)</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a class="name">**language**</a>
                                                        <a class="type">string</a>
                                                        <a class="required">required</a> <br/>
                                                        <a class="description">Voice language</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a class="name">**name**</a>
                                                        <a class="type">string</a>
                                                        <a class="required">required</a> <br/>
                                                        <a class="description">Language model name</a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a class="name">**dtmf**</a>
                                                <a class="type">boolean</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Tone set (DTMF) usage flag</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**telegram**</a>
                                        <a class="type">object</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Telegram message parameters</a>
                                        <table class="t2">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a class="name">**message**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Message text to be sent via Telegram</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**viber**</a>
                                        <a class="type">object</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Viber message parameters</a>
                                        <table class="t2">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a class="name">**type**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Viber message type</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a class="name">**signature**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Signature in the message</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a class="name">**message**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Message text to be sent via Viber</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**sms**</a>
                                        <a class="type">object</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">SMS message parameters</a>
                                        <table class="t2">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <a class="name">**signature**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Signature in the message</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a class="name">**message**</a>
                                                <a class="type">string</a>
                                                <a class="required">required</a> <br/>
                                                <a class="description">Message text to be sent via SMS</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**hook**</a>
                                        <a class="type">string</a> <br/>
                                        <a class="description">URL address of the script where the message delivery status will be sent</a>
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
                ```json
                {
                    "auth": "bb56a4369eb19***cfec6d1776bd25",
                    "data": [
                        {
                            "type": "pipeline",
                            "pipeline": [
                                "voice",
                                "telegram",
                                "viber",
                                "rcs",
                                "sms"
                            ],
                            "id": 100500,
                            "phone": 380971234567,
                            "voice": {
                                "message": "Your code is 100500",
                                "voice": {
                                    "gender": "female",
                                    "language": "uk-UA",
                                    "name": "uk-UA-Standard-A"
                                },
                                "dtmf": false
                            },
                            "telegram": {
                                "message": "100500"
                            },
                            "viber": {
                                "type": "text",
                                "signature": "ViberTest",
                                "message": "Your code is 100500"
                            },
                            "rcs": {
                                "signature": "AlphaRCS",
                                "message": "Your code is 1234"
                            },
                            "sms": {
                                "signature": "SMSTest",
                                "message": "Your code is 100500"
                            },
                            "hook": "https://example.org/webhook/url.php"
                        }
                    ]
                }
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
                            <a class="name">**success**</a>
                            <a class="type">integer</a> <br/>
                            <a class="description">Result of request execution</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**error**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Error text, returned if `success=false`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**data**</a>
                            <a class="type">list[object]</a> <br/>
                            <a class="description">List of objects with the results of request execution</a>
                            <table class="t2">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a class="name">**success**</a>
                                            <a class="type">boolean</a> <br/>
                                            <a class="description">Request execution result returned in the data packet</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="name">**error**</a>
                                            <a class="type">string</a> <br/>
                                            <a class="description">Error text, returned if `data.success=false`</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="name">**data**</a>
                                            <a class="type">object</a><br/>
                                            <a class="description">Request execution result</a> <br/>
                                            <table class="t2">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a class="name">**id**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Unique message identifier in the client system</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="name">**msg_id**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Message identifier assigned by the gateway</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a class="name">**data**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Description</a>
                                                        </td>
                                                    </tr> 
                                                    <tr>
                                                        <td>
                                                            <a class="name">**parts**</a>
                                                            <a class="type">number</a> <br/>
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
                    { label: 'Access denied', value: 'accessdenied', },
                    { label: 'Error in Alpha-name', value: 'alphaname' }
                ]}
                >
                <TabItem value="successful">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```json
                {
                    "success": true,
                    "data": [
                        {
                            "success": true,
                            "data": {
                                "id": 100500,
                                "msg_id": 123456789,
                                "data": 1,
                                "parts": 1
                            }
                        }
                    ]
                }
                ```
                </TabItem>
                <TabItem value="accessdenied">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```json
                {
                    "success": false,
                    "error": "Access denied"
                }
                ```
                </TabItem>
                <TabItem value="alphaname">
                **HTTP Status Code**: <font color="green">**200**</font> <br/> **Content Type**: JSON application/json
                ```json
                {
                    "success": true,
                    "data": [
                        {
                            "success": false,
                            "error": "Error in Alpha-name",
                            "data": {
                                "id": 100500
                            }
                        }
                    ]
                }
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>