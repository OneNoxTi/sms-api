---
title: Balance check
sidebar_label: Balance check
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of request to get the current balance status of the user's account in the [personal cabinet](../../general/getting_started.md).

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
                            <a class="description">Request type: `balance`</a>
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
                /api/http.php?key=APIKEY&command=balance
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
                            <a class="name">**balance**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Current balance status</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**errors**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Error message</a>
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
                balance:31.168300000000002
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