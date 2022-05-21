import { Box, Container, Grid, Typography } from "@mui/material";
import GameTile from "../../../components/Tile/GameTile";
import GamesFilter from "../../../components/Filters/GamesFilter/GamesFilter";
import PaginationFilter from "../../../components/Filters/PaginationFilter";
import { useState } from "react";
import withLoading from "../../../fetchData/withLoading";
import { loadAllGames } from "../../../fetchData/fetchGames";
import { GameSearchInfoVM } from "../../../api/api";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { ContentList } from "../ContentList.types";
import useFilterData from "../../../hooks/useFilterData";
const NGINX_URL = process.env.REACT_APP_NGINX_CONTENT;
interface GamesProps extends ContentList {
  games: GameSearchInfoVM[];
}
function Games(props: GamesProps) {
  const { games } = props;
  const filter = useFilterData(games);
  const [page, setPage] = useState(1)
  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
  console.log(games);
  return (
    <Container maxWidth="xl">
      <GamesFilter sliderLabel="DATA PUBLIKACJI:" data={games} page={1} {...filter.filterControl} />
      <Box sx={{ minHeight: "100vh" }}>
        {filter.Feedback ? (
          filter.Feedback
        ) : (
          <Grid container spacing={2}>
            {filter.data.map((x: any, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                <GameTile game={x} src={`${NGINX_URL}/${x.path}/horizontal.png`} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      {/* <PaginationFilter maxPage={50} page={page} onPageChange={handlePageChange} /> */}
    </Container>
  );
}
export default withLoading(Games, { games: loadAllGames });
