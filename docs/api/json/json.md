---
title: Request structure
---

import PspApi from '@site/src/components/PspApi.js';

All requests to API are sent in **JSON** format using the <a class="green-text">**POST**</a> method.

Requests must contain header **Content-Type**: application/json, otherwise, the request will be considered invalid even if it has valid **JSON**.

## Endpoint

Base URL for API requests: **<PspApi />**

## Authorization

Each request must contain an **auth** string with your API key obtained from your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key) as an addition to the main parameters of the method:

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ### Request parameters
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
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="request-example">
                ### Request example
                ```json
                {
                    "auth": "bb56a4369eb19***cfec6d1776bd25"
                }
                ```
            </div>
        </div>
    </div>
</div>

## Request structure

All request parameters are passed as objects inside the **data** array. The set of request parameters depends on the specified request type (see API method description for more details).

The **data** array can contain several objects with request parameters, for example:

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ### Request parameters
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
                                            <a class="name">**MESSAGE 1**</a>
                                            <a class="type">object</a> <br/>
                                            <a class="description">Message parameters</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>                                              
                                            <a class="name">**MESSAGE 2**</a>
                                            <a class="type">object</a> <br/>
                                            <a class="description">Message parameters</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>                                              
                                            <a class="name">**MESSAGE 3**</a>
                                            <a class="type">object</a> <br/>
                                            <a class="description">Message parameters</a>
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
                ### Request example
                ```json
                {
                    "auth": "bb56a4369eb19***cfec6d1776bd25",
                    "data": [
                        {
                            MESSAGE 1
                        },
                        {
                            MESSAGE 2
                        },
                        {
                            MESSAGE 3
                        }
                    ]
                }
                ```
            </div>
        </div>
    </div>
</div>