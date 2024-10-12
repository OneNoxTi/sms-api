---
title: Viber 2 Way message status
sidebar_label: Viber 2 Way message status
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of request to receive Viber 2 Way message status. Viber 2 Way service is designed to get feedback on a message from a consumer.

`URI: /api/json.php`

All requests to API are sent in JSON format using the <a class="green-text">**POST**</a> method.

<div class="header">
    ## Header parameters
    Requests must contain header **Content-Type**: application/json, otherwise, the request will be considered invalid even if it has valid JSON.
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
                                        <a class="name">**id**</a>
                                        <a class="type">number</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Description</a>
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
                            "type": "status",
                            "id": 100500
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
                                            <a class="name">**data**</a>
                                            <a class="type">object</a><br/>
                                            <a class="description">Request execution result</a> <br/>
                                            <table class="t2">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a class="name">**id**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Description</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**type**</a>
                                                            <a class="type">string</a> <br/>
                                                            <a class="description">Message type: `sms`, `viber`, `rcs`</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**status**</a>
                                                            <a class="type">string</a> <br/>
                                                            <a class="description">Current message status (see [Message statuses reference](../reference/message_statuses.md))</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**replies**</a>
                                                            <a class="type">list[object]</a> <br/>
                                                            <a class="description">List of replies to the message</a>
                                                            <table class="t2">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a class="name">**datetime**</a>
                                                                        <a class="type">string</a> <br/>
                                                                        <a class="description">Date and time of receipt of the response <br/> Format: `YYYYY-MM-DDThh:mm:ss±hh:mm`</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a class="name">**message**</a>
                                                                        <a class="type">string</a> <br/>
                                                                        <a class="description">Text of message</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a class="name">**media**</a>
                                                                        <a class="type">object</a> <br/>
                                                                        <a class="description">Object containing information about the media file attached to the message </a>
                                                                        <table class="t2">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**url**</a>
                                                                                    <a class="type">string</a> <br/>
                                                                                    <a class="description">Link to media file </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**filename**</a>
                                                                                    <a class="type">string</a> <br/>
                                                                                    <a class="description">Media file name </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**filesize**</a>
                                                                                    <a class="type">number</a> <br/>
                                                                                    <a class="description">Media file size</a>
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
                    { label: 'Access denied', value: 'accessdenied' }
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
                                "id":10500,
                                "type": "viber",
                                "status": "REPLIED",
                                "replies": [
                                    {
                                        "datetime": "2022-05-01T12:01:02+03:00",
                                        "message": "Please wait"
                                    },
                                    {
                                        "datetime": "2022-05-03T14:21:17+03:00",
                                        "media": {
                                            "url": "https://url.com/home/vibermedia/",
                                            "filename": "invoice.pdf",
                                            "filesize": 67983
                                        }
                                    },
                                    {
                                        "datetime": "2022-05-03T14:21:17+03:00",
                                        "message": "Correct invoice",
                                        "media": {
                                            "url": "https://url.com/home/vibermedia/",
                                            "filename": "invoice.pdf",
                                            "filesize": 68934
                                        }
                                    }
                                ]
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
                </Tabs>
            </div>
        </div>
    </div>
</div>