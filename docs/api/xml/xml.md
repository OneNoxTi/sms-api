---
title: Request structure
---

import PspApiUrl from '@site/src/components/apiUrl.js';

Communication with the service is performed by sending **XML** requests in **UTF-8** encoding to the specified address of the service via HTTP/HTTPS protocol using <a class="green-text">**POST**</a> method, no content type check is performed.

Each request may consist of sending messages and (or) requests to receive statuses. User authorization is performed by transferring the user's credentials.

## Endpoint

Base URL for API requests: **<PspApiUrl/>**

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
                            <a class="name">**package**</a>
                            <a class="type">xml tag</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Tag to transmit the credentials required for authorization</a>
                            <table class="t2">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="name">**key**</a>
                                        <a class="type">string</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
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
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package key="bb56a4369eb19***cfec6d1776bd25">
                ...
                </package>
                ```
            </div>
        </div>
    </div>
</div>

## Request structure

The set of request parameters depends on the specified request type (see API method description for more details).

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ### Request parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**package**</a>
                            <a class="type">xml tag</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Tag to transmit the credentials required for authorization</a>
                            <table class="t2">
                            <tbody>
                                <tr>
                                    <td>
                                        <a class="name">**key**</a>
                                        <a class="type">varchar</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a class="name">**command**</a>
                                        <a class="type">xml tag</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Request type: <ul><li>**message** - sending SMS messages</li><li>**message-viber** - sending Viber messages</li><li>**status** - message status request</li><li>**balance** - balance check</li><li>**delete** - request to delete SMS from the queue</li><li>**message-async** - asynchronous message sending</li><li>**job** - requesting the results of an asynchronous task</li><li>**prices** - check the cost of sending a message</li></ul></a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**parameter**</a>
                                                    <a class="type">xml tag</a><br/>
                                                    <a class="description">Request parameters, depends on the command being transmitted</a>
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
                ### Request example
                ```xml
                <?xml version="1.0" encoding="utf-8" ?>
                <package key="bb56a4369eb19***cfec6d1776bd25">
                    <command>
                        <parameter ...></parameter>
                        <parameter ...></parameter>
                        <parameter ...></parameter>
                    </command>
                </package>
                ```
            </div>
        </div>
    </div>
</div>
