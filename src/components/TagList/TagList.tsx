import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useQuery } from "react-query";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import { ApiError, TagsApiResponse } from "../../interfaces/TagsApi.interface";
import { TagInterface } from "../../interfaces/Tag.interface";
import { cardStyling } from "./TagListsStyles";

export const TagList: React.FC<{
  dataHook: DataHookInterface;
}> = ({ dataHook }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, error, isLoading } = useQuery<TagsApiResponse, ApiError>(
    [
      "tagsData",
      dataHook.page,
      dataHook.pageSize,
      dataHook.sort,
      dataHook.order,
      dataHook.inName,
    ],
    dataHook.fetchTags,
    {
      keepPreviousData: true,
      enabled: dataHook.triggerFetch,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        console.log(data);
        dataHook.setTriggerFetch(false);
      },
      onError: (err: ApiError) => {
        console.error("Failed to fetch tags:", err.message);
        dataHook.setTriggerFetch(false);
      },
    }
  );
  console.log(
    "dataHooksQueries",
    data,
    dataHook.page,
    dataHook.pageSize,
    dataHook.sort,
    dataHook.order,
    `dataPages`
  );

  const paginationComponent = (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        background: "white",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        zIndex: theme.zIndex.appBar + 1,
      }}
    >
      <Typography variant="subtitle2" sx={{ marginRight: "8px" }}>
        PAGES :
      </Typography>
      <Pagination
        count={data?.has_more ? dataHook.page + 1 : dataHook.page}
        page={dataHook.page}
        onChange={(_, value) => {
          if (
            (value > dataHook.page && data?.has_more) ||
            value < dataHook.page
          ) {
            dataHook.setPage(value);
            dataHook.setTriggerFetch(true);
          }
        }}
        siblingCount={0}
        boundaryCount={1}
        sx={{ 
          background: "linear-gradient(to left, #ffffff 10%,  #bcd9ea 60%)",
          borderRadius: "8px",
        }}
        showFirstButton
        showLastButton
      />
    </Box>
  );

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>error {error.response && error.message}</AlertTitle>
        {error.response
          ? `${error.response.status} ${error.response.statusText} ${error.response}`
          : error.message}
      </Alert>
    );
  }
  if (!data?.items) {
    return <Typography>No data </Typography>;
  }

  if (!data?.items || data.items.length === 0) {
    return <Typography>No matching tags found.</Typography>;
  }

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            p: 1,
            background: "white",
            borderTop: "1px solid rgba(0,0,0,0.12)",
            zIndex: theme.zIndex.snackbar,
          }}
        >
          {paginationComponent}
        </Box>
      )}
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "left" }, // Responsive alignment
            alignItems: "center",
            margin: "5px 15px",
          }}
        >
          {!isMobile && <>{paginationComponent}</>}
        </Grid>
        {data.items.map((tag: TagInterface, index: number) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Card sx={cardStyling}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {tag.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: "0.875rem",
                  }}
                >
                  Posts related: {tag.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
