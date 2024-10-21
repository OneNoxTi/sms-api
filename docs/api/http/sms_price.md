---
title: Cost of sending an SMS
sidebar_label: Cost of sending an SMS
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of a request to receive the cost of sending an SMS message to a specified number.

`URI: /api/http.php`

All requests to the gateway API are sent in **JSON** using the <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## URI parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**key**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**command**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Request type: `send`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**to**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Recipient's phone number in international format format</a>
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
                ```
                /api/http.php?key=api/key&command=price&to=380501234567
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
                            <a class="name">**price**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Cost of sending SMS message</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**currency**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Currency of the cost of sending SMS message</a>
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
                    { label: 'Unknown command', value: 'command' }
                ]}
                >
                <TabItem value="successful">
                ```
                price:1.2 currency:UAH
                ```
                </TabItem>
                <TabItem value="command">
                ```
                errors:Unknown command
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>