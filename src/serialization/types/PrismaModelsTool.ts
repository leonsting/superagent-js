/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsTool: core.serialization.ObjectSchema<
    serializers.PrismaModelsTool.Raw,
    SuperAgent.PrismaModelsTool
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("..")).ToolType),
    returnDirect: core.serialization.boolean(),
    metadata: core.serialization.string(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    apiUserId: core.serialization.string(),
    apiUser: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsApiUser).optional(),
    tools: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgentTool))
        .optional(),
});

export declare namespace PrismaModelsTool {
    interface Raw {
        id: string;
        name: string;
        description: string;
        type: serializers.ToolType.Raw;
        returnDirect: boolean;
        metadata: string;
        createdAt: string;
        updatedAt: string;
        apiUserId: string;
        apiUser?: serializers.PrismaModelsApiUser.Raw | null;
        tools?: serializers.PrismaModelsAgentTool.Raw[] | null;
    }
}