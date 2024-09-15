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

<div id="api">
    <div class="header">
        ## Header parameters
        **Content-Type**: application/json
    </div>
    <div class="request">
        <div class="request-parameters">
            ## Request parameters
            <div class="f1">
                <a class="name">**auth**</a>
                <a class="type">string</a>
                <a class="mandatory">required</a> <br/>
                <a class="description">Your API key, which can be obtained in your personal cabinet</a>
            </div>
            <div class="f1">
                <a class="name">**data**</a>
                <a class="type">array[object]</a>
                <a class="mandatory">required</a> <br/>
                <a class="description">Array with request parameters</a>
            </div>
            <div class="f2">
                <a class="name">**type**</a>
                <a class="type">string</a>
                <a class="mandatory">required</a> <br/>
                <a class="description">Request type</a>
            </div>
        </div>
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
    <div class="response">
        <div class="response-parameters">
            ## Response parameters
            <div class="f1">
                <a class="name">**success**</a>
                <a class="type">integer</a> <br/>
                <a class="description">Description</a>
            </div>
            <div class="f1">
                <a class="name">**data**</a>
                <a class="type">array[object]</a> <br/>
                <a class="description">Description</a>
            </div>           
            <div class="f2">
                <a class="name">**success**</a>
                <a class="type">boolean</a> <br/>
                <a class="description">Description</a>
            </div>
            <div class="f2">
                <a class="name">**data**</a>
                <a class="type">object</a> <br/>
                <a class="description">Description</a>
            </div>
            <div class="f3">
                <a class="name">**amount**</a>
                <a class="type">number</a> <br/>
                <a class="description">Current balance status</a>
            </div>
            <div class="f3">
                <a class="name">**currency**</a>
                <a class="type">string</a> <br/>
                <a class="description">Description</a>
            </div>
            <div class="f1">
                <a class="name">**error**</a>
                <a class="type">string</a> <br/>
                <a class="description">Description</a>
            </div>

        </div>
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