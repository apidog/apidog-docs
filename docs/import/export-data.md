---
sidebar_position: 4
---

# Export Data


## Functions



1. We support exporting as OpenAPI (former Swagger), HTML, Markdown, and other data formats. 
2. For OpenAPI(Swagger), we support 3.1, 3.0, and 2.0 versions. 
3. For OpenAPI(Swagger), we also support exporting as an offline document or exporting to an URL.
> 
> Export as PDF or Word documents. 
> 
> We currently do not support direct export as PDF and Word documents, but you can use external tools to convert Markdown into these formats.
> 
>   For example, Typora is a tool that can convert Markdown into PDF, Word, OpenOffice, Epub, and other formats. 

> Common Problems 
> 
> 
> 
> * Why have there been fewer exported APIs? Please check whether there are multiple APIs sharing the same methods and path. Currently, exporting HTML and Markdown is done through OpenAPI data conversion, and the OpenAPI specification does not support using the same methods and paths for different APIs.
> * Why is the API order messed up when exporting Markdown and HTML formats?
>     * There is no concept of order in the Swagger specification, nor the concept of grouping. 
>     * HTML and markdown are converted by Swagger so that the above problem exists. 
>     * If you need to preserve the order, please use Apidog format to export. 
>     * How come only one API is exported successfully among multiple APIs? 
>     * Swagger format might not be supported. 
>     * HTML and markdown are converted by Swagger so that the above problem exists. 
> 
## Quick Start


Open the project settings page, and click on export.

You can export all the APIs or some of the APIs. For example, as shown in the screenshot, you can choose certain APIs based on needs. 

Support exporting APIs based on tags. 

