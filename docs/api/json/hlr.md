---
id: hlr
title: HLR
sidebar_label: HLR
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request to check the validity of a specified number. You can also get detailed information about the number, including identifying the mobile operator and whether the number is in roaming. The subscriber does not receive any notifications, as the request is directed to the telecom operator's equipment.

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
                                        <a class="name">**phone**</a>
                                        <a class="type">number</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Phone number of the recipient of the message</a>
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
                            "type": "hlr",
                            "phone": 380971234567
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
                                                            <a class="name">**phone**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Phone number to be checked</a>
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
                                                            <a class="name">**imsi**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">International Mobile Subscriber Identity - number that uniquely identifies every user of a cellular network</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**mccmnc**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">MCC is a mobile country code. In combination with MNC is a unique identifier of cellular operator of networks</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**ported**</a>
                                                            <a class="type">boolean</a> <br/>
                                                            <a class="description">Flag of the ported number</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**network**</a>
                                                            <a class="type">object</a> <br/>
                                                            <a class="description">Object containing mobile network data</a>
                                                            <table class="t2">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a class="name">**origin**</a>
                                                                        <a class="type">object</a> <br/>
                                                                        <a class="description">Object containing data about the origin mobile network</a>
                                                                        <table class="t2">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**name**</a>
                                                                                    <a class="type">string</a> <br/>
                                                                                    <a class="description">Name of mobile network operator</a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**prefix**</a>
                                                                                    <a class="type">number</a> <br/>
                                                                                    <a class="description">Mobile network operator code</a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**country**</a>
                                                                                    <a class="type">object</a> <br/>
                                                                                    <a class="description">Object containing data about the country of the mobile network operator</a>
                                                                                    <table class="t2">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <a class="name">**name**</a>
                                                                                                <a class="type">string</a> <br/>
                                                                                                <a class="description">Country name</a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <a class="name">**prefix**</a>
                                                                                                <a class="type">number</a> <br/>
                                                                                                <a class="description">MCC country code</a>
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
                                                                <tr>
                                                                    <td>
                                                                        <a class="name">**ported**</a>
                                                                        <a class="type">object</a> <br/>
                                                                        <a class="description">Object containing data about the ported mobile network</a>
                                                                        <table class="t2">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**name**</a>
                                                                                    <a class="type">string</a> <br/>
                                                                                    <a class="description">Name of mobile network operator</a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**prefix**</a>
                                                                                    <a class="type">number</a> <br/>
                                                                                    <a class="description">Mobile network operator code</a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <a class="name">**country**</a>
                                                                                    <a class="type">object</a> <br/>
                                                                                    <a class="description">Object containing data about the country of the mobile network operator</a>
                                                                                    <table class="t2">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <a class="name">**name**</a>
                                                                                                <a class="type">string</a> <br/>
                                                                                                <a class="description">Country name</a>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <a class="name">**prefix**</a>
                                                                                                <a class="type">number</a> <br/>
                                                                                                <a class="description">MCC country code</a>
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
                                "phone": 380971234567,
                                "status": "DELIVERED",
                                "imsi": 255010000000000,
                                "mccmnc": 25501,
                                "ported": true,
                                "network": {
                                    "origin": {
                                        "name": "Kyivstar",
                                        "prefix": 97,
                                        "country": {
                                            "name": "Ukraine",
                                            "prefix": 380,
                                        }
                                    },
                                    "ported": {
                                        "name": "Vodafone Ukraine (fka MTS)",
                                        "prefix": 66,
                                        "country": {
                                            "name": "Ukraine",
                                            "prefix": 380,
                                        }
                                    }
                                }
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