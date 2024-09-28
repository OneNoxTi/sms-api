---
id: balance
title: Balance check
sidebar_label: Balance check
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The method is used to get the current balance status of the user's account in the personal cabinet.

`URI: /api/json.php`

All requests to API are sent in JSON format using the <a class="green-text">**POST**</a> method.

<div class="header">
    ## Header parameters
    Requests must contain header **Content-Type**: application/json, otherwise, the request will be considered invalid even if it has valid JSON    
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
                            <a class="type">array[object]</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Array with request parameters</a>
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
                            "type": "balance"
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
                            <a class="description">Description</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**error**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Description</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**data**</a>
                            <a class="type">array[object]</a> <br/>
                            <a class="description">Description</a>
                            <table class="t2">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a class="name">**success**</a>
                                            <a class="type">boolean</a> <br/>
                                            <a class="description">Description</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="name">**data**</a>
                                            <a class="type">object</a><br/>
                                            <a class="description">Description</a> <br/>
                                            <table class="t2">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a class="name">**amount**</a>
                                                            <a class="type">number</a> <br/>
                                                            <a class="description">Current balance status</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>                                              
                                                            <a class="name">**currency**</a>
                                                            <a class="type">string</a> <br/>
                                                            <a class="description">Description</a>
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
                    { label: 'Unsuccessful', value: 'unsuccessful' }
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
                                "amount": 31.1683,
                                "currency": "UAH"
                            }
                        }
                    ]
                }
                ```
                </TabItem>
                <TabItem value="unsuccessful">
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