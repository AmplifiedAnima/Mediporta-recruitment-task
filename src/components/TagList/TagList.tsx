import { Box, CircularProgress, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import { ApiError, TagsApiResponse } from "../../interfaces/TagsApi.interface";
import { TagInterface } from "../../interfaces/Tag.interface";
import TagCard from "./Card/TagCard";
import PaginationTagList from "./Pagination/PaginationTagList";
import { gridItemStyles } from "./TagListsStyles";
import { SimpleErrorInlineHandler } from "../ErrorsAndNotifications/SimpleErrorInlineHandler";
import React from "react";
import CenteredBox from "./CenteredBox";
import { noTagFound, searchForTags } from "./NoTagsAndSearchForTagsObjects";

const TagListComponent: React.FC<{
  dataHook: DataHookInterface;
}> = ({ dataHook }) => {
  const { data, error, isLoading } = useQuery<TagsApiResponse, ApiError>(
    [
      "tagsData",
      dataHook.inName,
      dataHook.page,
      dataHook.pageSize,
      dataHook.sort,
      dataHook.order,
    ],
    dataHook.fetchTags,
    {
      keepPreviousData: true,
      enabled: !!dataHook.triggerFetch,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        console.log(data);
        dataHook.setTriggerFetch(false);
      },
      onError: (err: ApiError) => {
        const detailedErrorMessage = err.details
          ? `Error ${err.details.error_id}: ${err.details.error_name} - ${err.details.error_message}`
          : err.message;
        dataHook.setErrorMessage(detailedErrorMessage!);
        dataHook.setErrorSnackOpen(true);
      },
    }
  );
  const handleCloseError = () => {
    dataHook.setErrorSnackOpen(false);
  };

  console.log(
    "dataHooksQueries",
    data,
    dataHook.inName,
    dataHook.page,
    dataHook.pageSize,
    dataHook.sort,
    dataHook.order,
    `dataPages`
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "15px" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <CenteredBox>
        <SimpleErrorInlineHandler
          open={dataHook.errorSnackOpen}
          error={dataHook.errorMessage}
          handleCloseError={handleCloseError}
        />
      </CenteredBox>
    );
  }
  if (!data?.items) {
    return (
      <CenteredBox>
        <TagCard tag={searchForTags} index={1} />
      </CenteredBox>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <CenteredBox>
        <TagCard tag={noTagFound} index={1} />
      </CenteredBox>
    );
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "5px" }}
      >
        <Grid item xs={12} sx={{ gridItemStyles }}>
          <PaginationTagList data={data} dataHook={dataHook} />
        </Grid>

        {data.items.map((tag: TagInterface, index: number) => (
          <TagCard tag={tag} index={index} />
        ))}
      </Grid>
    </>
  );
};

export const TagList = React.memo(TagListComponent);
