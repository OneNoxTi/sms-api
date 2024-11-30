---
title: Requesting the results of an asynchronous task
sidebar_label: Requesting the results of an asynchronous task
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of requesting the results of an asynchronous task.
Once the sms is set to send, you can request the status of task completion. For each task, the results of execution are stored for 12 hours.

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
                                        <a class="name">**job**</a>
                                        <a class="type">tag</a>
                                        <a class="required">required</a> <br/>
                                        <a class="description">Task ID received during asynchronous sending</a>
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
                    <job>8714ea91e9bb454d25ef42ba6f18ea4e</job>
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
                                        <a class="name">**job**</a>
                                        <a class="type">tag</a> <br/>
                                        <a class="description">Tag specifying the type of request</a>
                                        <table class="t2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a class="name">**progress**</a>
                                                    <a class="type">tag | int(0,100)</a> <br/>
                                                    <a class="description">Numerical value in percentage of the number of processed messages</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a class="name">**status**</a>
                                                    <a class="type">tag | string</a> <br/>
                                                    <a class="description">Current task status: <lu><li>**WAITING** - task is waiting in the execution queue</li><li>**RUNNING** - task in progress</li><li>**FAILED** - error during task execution. Perhaps some of the messages are accepted for sending. This can be found out by requesting message delivery statuses by user ID </li><li>**COMPLETE** - task completed</li><li>**NOTFOUND** - task not found</li></lu></a>
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
                    <job>
                        <progress>50</progress>
                        <status>RUNNING</status>
                    </job>
                </package>
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>
